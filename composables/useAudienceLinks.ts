import { computed } from 'vue'
import { useReactionSession } from './useReactionSession'

export function useAudienceLinks() {
  const { room, joinUrl } = useReactionSession()
  const liveRoute = computed(() => ({ name: 'live', query: { room: room.value } }))
  const sourcesRoute = computed(() => ({ name: 'sources', query: { room: room.value } }))
  const publicSourcesUrl = computed(() => {
    const fallback = new URL(joinUrl.value)
    fallback.pathname = fallback.pathname.replace(/\/[^/]*\/?$/, '/sources')
    fallback.hash = ''
    let url = fallback
    try {
      const configured = new URL(import.meta.env.VITE_SOURCES_URL || fallback.href)
      if (['https:', 'http:'].includes(configured.protocol))
        url = configured
    }
    catch { /* Invalid overrides fall back to the public audience site's sources page. */ }
    url.searchParams.set('room', room.value)
    return url.href
  })

  return { liveRoute, sourcesRoute, publicSourcesUrl }
}
