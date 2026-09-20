import PartySocket from 'partysocket'
import { onMounted, onBeforeUnmount, ref, toValue, watch, type MaybeRefOrGetter } from 'vue'
import { parseReaction, takeToken, type Reaction } from '../shared/reactions'

type ConnectionStatus = 'off' | 'unconfigured' | 'connecting' | 'connected' | 'reconnecting'

export function useReactions(options: {
  host: string
  room: MaybeRefOrGetter<string>
  enabled: MaybeRefOrGetter<boolean>
  onReaction?: (emoji: Reaction) => void
}) {
  const status = ref<ConnectionStatus>('off')
  const mounted = ref(false)
  let socket: PartySocket | undefined
  const bucket = { tokens: 4, updatedAt: Date.now() }

  watch([mounted, () => toValue(options.enabled), () => toValue(options.room)], ([ready, enabled, room], _, onCleanup) => {
    status.value = options.host ? 'off' : 'unconfigured'
    if (!ready || !enabled || !options.host)
      return

    status.value = 'connecting'
    const connection = new PartySocket({
      host: options.host,
      room,
      maxEnqueuedMessages: 0,
      minReconnectionDelay: 500,
      maxReconnectionDelay: 5000,
      connectionTimeout: 5000,
      startClosed: !navigator.onLine,
    })
    socket = connection
    const onOpen = () => { status.value = 'connected' }
    const onDisconnect = () => { status.value = 'reconnecting' }
    const onOffline = () => {
      onDisconnect()
      connection.close()
    }
    const onOnline = () => connection.reconnect()
    const onMessage = (event: MessageEvent) => {
      const emoji = parseReaction(event.data)
      if (emoji)
        options.onReaction?.(emoji)
    }
    connection.addEventListener('open', onOpen)
    connection.addEventListener('close', onDisconnect)
    connection.addEventListener('error', onDisconnect)
    connection.addEventListener('message', onMessage)
    window.addEventListener('offline', onOffline)
    window.addEventListener('online', onOnline)
    if (!navigator.onLine)
      onDisconnect()

    onCleanup(() => {
      connection.removeEventListener('open', onOpen)
      connection.removeEventListener('close', onDisconnect)
      connection.removeEventListener('error', onDisconnect)
      connection.removeEventListener('message', onMessage)
      window.removeEventListener('offline', onOffline)
      window.removeEventListener('online', onOnline)
      connection.close()
      if (socket === connection)
        socket = undefined
    })
  }, { immediate: true })

  function send(emoji: Reaction): boolean {
    if (!socket || status.value !== 'connected' || socket.readyState !== PartySocket.OPEN || socket.bufferedAmount > 1024)
      return false
    if (!takeToken(bucket, 4, 2))
      return false
    socket.send(`reaction:${emoji}`)
    return true
  }

  onMounted(() => { mounted.value = true })
  onBeforeUnmount(() => socket?.close())
  return { status, send }
}
