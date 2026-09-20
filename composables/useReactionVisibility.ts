import { computed, onBeforeUnmount, onMounted, ref, watch, type Ref } from 'vue'

export function useReactionVisibility(host: string, room: Ref<string>) {
  const enabled = ref(false)
  const key = computed(() => `tester-2:reactions:${host}:${room.value}`)
  const eventName = 'tester-2:reaction-visibility'

  function load() {
    try {
      enabled.value = localStorage.getItem(key.value) === 'on'
    }
    catch {
      enabled.value = false
    }
  }

  function onStorage(event: StorageEvent) {
    if (event.key === null || event.key === key.value)
      load()
  }

  function onLocalChange(event: Event) {
    const detail = (event as CustomEvent<{ key: string, enabled: boolean }>).detail
    if (detail?.key === key.value)
      enabled.value = detail.enabled
  }

  function toggle() {
    enabled.value = !enabled.value
    try {
      localStorage.setItem(key.value, enabled.value ? 'on' : 'off')
    }
    catch { /* The control still works in this tab when storage is unavailable. */ }
    window.dispatchEvent(new CustomEvent(eventName, { detail: { key: key.value, enabled: enabled.value } }))
  }

  watch(key, load)
  onMounted(() => {
    load()
    window.addEventListener('storage', onStorage)
    window.addEventListener(eventName, onLocalChange)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener(eventName, onLocalChange)
  })

  return { enabled, toggle }
}
