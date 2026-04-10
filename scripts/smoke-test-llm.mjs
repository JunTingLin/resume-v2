// Throwaway smoke test: proves @ai-sdk/google + GOOGLE_GENERATIVE_AI_API_KEY work.
// Run: node --env-file=.env.local scripts/smoke-test-llm.mjs

import { generateText } from 'ai'
import { google } from '@ai-sdk/google'

if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  console.error('❌ GOOGLE_GENERATIVE_AI_API_KEY is not set. Did you pass --env-file=.env.local ?')
  process.exit(1)
}

console.log('→ Calling gemini-2.5-flash-lite ...')

const { text, usage, finishReason } = await generateText({
  model: google('gemini-2.5-flash-lite'),
  prompt: 'In one short sentence, introduce yourself as Jun-Ting Lin\'s digital twin and say hi in Traditional Chinese.',
})

console.log('---- response ----')
console.log(text)
console.log('---- meta ----')
console.log('finishReason:', finishReason)
console.log('usage:', usage)
console.log('\n✅ Smoke test passed.')
