import type * as Party from 'partykit/server'
import { isValidRoom, parseReaction, takeToken, type RateBucket } from '../shared/reactions.ts'

export default class ReactionServer implements Party.Server {
  readonly room: Pick<Party.Room, 'id' | 'broadcast'>
  private readonly clients = new WeakMap<object, RateBucket>()
  private readonly traffic: RateBucket = { tokens: 30, updatedAt: Date.now() }

  constructor(room: Pick<Party.Room, 'id' | 'broadcast'>) {
    this.room = room
  }

  static onBeforeConnect(request: Party.Request, lobby: Party.Lobby) {
    return isValidRoom(lobby.id) ? request : new Response('Invalid room', { status: 400 })
  }

  onMessage(message: string | ArrayBuffer, sender: object) {
    const emoji = parseReaction(message)
    if (!emoji || !isValidRoom(this.room.id))
      return

    const now = Date.now()
    let bucket = this.clients.get(sender)
    if (!bucket) {
      bucket = { tokens: 4, updatedAt: now }
      this.clients.set(sender, bucket)
    }

    if (!takeToken(bucket, 4, 2, now) || !takeToken(this.traffic, 30, 30, now))
      return

    this.room.broadcast(`reaction:${emoji}`)
  }

  onClose(connection: object) {
    this.clients.delete(connection)
  }

  onError(connection: object) {
    this.clients.delete(connection)
  }
}
