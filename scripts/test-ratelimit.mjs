// Throwaway Step 4 verification: seeds Redis to simulate a session at the
// turn cap and an IP at the daily cap, then hits /api/chat to confirm the
// route returns 429 with the right error body.
// Run: node --env-file=.env.local scripts/test-ratelimit.mjs

import { Redis } from "@upstash/redis";

const BASE = "http://localhost:3001";
const redis = Redis.fromEnv();

function uniqueId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function postChat({ id, text, ip = "203.0.113.42" }) {
  const res = await fetch(`${BASE}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify({
      id,
      messages: [{ id: "m1", role: "user", parts: [{ type: "text", text }] }],
    }),
  });
  let body = null;
  const ct = res.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) body = await res.json();
  else body = (await res.text()).slice(0, 120);
  return { status: res.status, body };
}

// --- Test 1: fresh request should succeed ---
{
  const id = uniqueId("ok");
  const ip = `198.51.100.${Math.floor(Math.random() * 200) + 1}`;
  const { status, body } = await postChat({
    id,
    ip,
    text: "Say hi in one word.",
  });
  console.log(`[T1 happy path]        status=${status}`);
  if (status !== 200) console.log("   body:", body);
}

// --- Test 2: session already at 20 turns → 429 ---
{
  const id = uniqueId("sess-at-cap");
  const key = `chat:session:${id}:turns`;
  await redis.set(key, 20, { ex: 3600 });
  const { status, body } = await postChat({
    id,
    ip: "198.51.100.250",
    text: "Another question.",
  });
  console.log(`[T2 session cap]       status=${status}`);
  console.log("   body:", body);
  await redis.del(key);
}

// --- Test 3: IP already at daily cap → 429 ---
// Use a bespoke IP so we don't trash the real IP window. The sliding window
// lives under prefix "chat:ip". We can't easily seed its internal shape, so
// we'll just hammer it 31 times and expect the 31st to fail.
{
  const ip = `192.0.2.${Math.floor(Math.random() * 200) + 1}`;
  let firstFail = null;
  for (let i = 1; i <= 32; i++) {
    const { status } = await postChat({
      id: uniqueId(`ip-flood-${i}`),
      ip,
      text: "hi",
    });
    if (status === 429 && firstFail === null) {
      firstFail = i;
      break;
    }
  }
  console.log(
    `[T3 ip cap]            first 429 at request #${firstFail ?? "never"}`
  );
}

console.log("\n✅ Done.");
