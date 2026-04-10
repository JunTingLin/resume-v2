import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Lazy singletons — avoid constructing Redis at module load time so a
// missing env var surfaces on the first chat request instead of breaking
// the whole Next.js server boot.
let _redis: Redis | null = null;
let _ipLimiter: Ratelimit | null = null;

function getRedis(): Redis {
  if (!_redis) {
    if (
      !process.env.UPSTASH_REDIS_REST_URL ||
      !process.env.UPSTASH_REDIS_REST_TOKEN
    ) {
      throw new Error(
        "Upstash Redis env vars missing: set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in .env.local"
      );
    }
    _redis = Redis.fromEnv();
  }
  return _redis;
}

function getIpLimiter(): Ratelimit {
  if (!_ipLimiter) {
    _ipLimiter = new Ratelimit({
      redis: getRedis(),
      // 30 chat requests per day per IP. Generous for a real visitor,
      // tight enough to contain abuse / cost runaway.
      limiter: Ratelimit.slidingWindow(30, "1 d"),
      analytics: true,
      prefix: "chat:ip",
    });
  }
  return _ipLimiter;
}

export const MAX_TURNS_PER_SESSION = 20;
const SESSION_TTL_SECONDS = 24 * 60 * 60;

export type IpLimitResult = {
  success: boolean;
  remaining: number;
  resetMs: number;
};

export async function checkIpLimit(ip: string): Promise<IpLimitResult> {
  const res = await getIpLimiter().limit(ip);
  return {
    success: res.success,
    remaining: res.remaining,
    resetMs: res.reset,
  };
}

export type SessionLimitResult = {
  success: boolean;
  turns: number;
  limit: number;
};

/**
 * Atomically increment the per-session turn counter and return whether
 * the caller is still within the limit. First INCR sets a 24h TTL so
 * abandoned chats eventually expire from Redis.
 */
export async function checkAndIncrSessionTurns(
  sessionId: string
): Promise<SessionLimitResult> {
  const redis = getRedis();
  const key = `chat:session:${sessionId}:turns`;
  const turns = await redis.incr(key);
  if (turns === 1) {
    await redis.expire(key, SESSION_TTL_SECONDS);
  }
  return {
    success: turns <= MAX_TURNS_PER_SESSION,
    turns,
    limit: MAX_TURNS_PER_SESSION,
  };
}
