import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { isValidRoom } from '../shared/reactions'

export function useReactionSession() {
  const route = useRoute()
  const room = computed(() => typeof route.query.room === 'string'
    ? route.query.room
    : import.meta.env.VITE_REACTIONS_ROOM || 'tester-2')
  const validRoom = computed(() => isValidRoom(room.value))
  const host = import.meta.env.VITE_REACTIONS_HOST?.trim()
    || (import.meta.env.DEV ? `${window.location.hostname}:1999` : '')

  const audienceUrl = computed(() => {
    const url = new URL(`${import.meta.env.BASE_URL}live`, window.location.origin)
    url.searchParams.set('room', room.value)
    return url.href
  })
  const joinUrl = computed(() => {
    const fallback = new URL(`${import.meta.env.BASE_URL}live`, window.location.origin)
    let url = fallback
    try {
      const configured = new URL(import.meta.env.VITE_REACTIONS_JOIN_URL || 'https://slides.filiphric.com/tester-2/live')
      if (['https:', 'http:'].includes(configured.protocol))
        url = configured
    }
    catch { /* A missing or invalid public URL falls back to this deployment. */ }
    url.searchParams.set('room', room.value)
    return url.href
  })

  const publicJoinUrl = computed(() => {
    const hostname = new URL(joinUrl.value).hostname
    return !['localhost', '127.0.0.1', '[::1]'].includes(hostname)
  })

  return { host, room, validRoom, joinUrl, audienceUrl, publicJoinUrl }
}
