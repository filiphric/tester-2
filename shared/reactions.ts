export const reactionOptions = [
  { emoji: '👍', label: 'Agree' },
  { emoji: '❤️', label: 'Love it' },
  { emoji: '😂', label: 'Funny' },
  { emoji: '👏', label: 'Applause' },
  { emoji: '🔥', label: 'Brilliant' },
  { emoji: '🤯', label: 'Mind blown' },
  { emoji: '🎉', label: 'Celebrate' },
  { emoji: '🎯', label: 'Spot on' },
  { emoji: '🌶️', label: 'Spicy' },
] as const

export type Reaction = typeof reactionOptions[number]['emoji']

export function isValidRoom(room: string): boolean {
  return /^[a-z0-9][a-z0-9-]{0,63}$/.test(room)
}

export function parseReaction(message: unknown): Reaction | undefined {
  if (typeof message !== 'string' || message.length > 64 || !message.startsWith('reaction:'))
    return undefined
  const emoji = message.slice('reaction:'.length)
  return reactionOptions.find(option => option.emoji === emoji)?.emoji
}

export interface RateBucket {
  tokens: number
  updatedAt: number
}

export function takeToken(bucket: RateBucket, capacity: number, perSecond: number, now = Date.now()): boolean {
  bucket.tokens = Math.min(capacity, bucket.tokens + Math.max(0, now - bucket.updatedAt) * perSecond / 1000)
  bucket.updatedAt = now
  if (bucket.tokens < 1)
    return false
  bucket.tokens -= 1
  return true
}
