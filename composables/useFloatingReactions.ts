import { onBeforeUnmount, ref } from 'vue'
import type { Reaction } from '../shared/reactions'

export interface FloatingReaction {
  id: number
  emoji: Reaction
  x: number
  drift: number
  size: number
}

export function useFloatingReactions() {
  const reactions = ref<FloatingReaction[]>([])
  const timers = new Map<number, ReturnType<typeof setTimeout>>()
  let nextId = 0

  function remove(id: number) {
    clearTimeout(timers.get(id))
    timers.delete(id)
    reactions.value = reactions.value.filter(reaction => reaction.id !== id)
  }

  function add(emoji: Reaction) {
    if (reactions.value.length >= 30)
      remove(reactions.value[0]!.id)
    const id = nextId++
    reactions.value.push({ id, emoji, x: Math.random() * 100, drift: Math.random() * 80 - 40, size: 32 + Math.random() * 20 })
    timers.set(id, setTimeout(() => remove(id), 2500))
  }

  onBeforeUnmount(() => {
    timers.forEach(timer => clearTimeout(timer))
    timers.clear()
  })
  return { reactions, add }
}
