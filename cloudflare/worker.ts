import { routePartykitRequest, Server, type Connection, type WSMessage } from 'partyserver'
import ReactionServer from '../partykit/server'
import { isValidRoom } from '../shared/reactions'

interface Env {
  Main: DurableObjectNamespace<Main>
}

// Keep the existing /parties/main/:room endpoint used by deployed clients.
export class Main extends Server<Env> {
  private reactions!: ReactionServer

  onStart() {
    this.reactions = new ReactionServer({
      id: this.name,
      broadcast: message => this.broadcast(message),
    })
  }

  onMessage(connection: Connection, message: WSMessage) {
    if (typeof message === 'string')
      this.reactions.onMessage(message, connection)
  }

  onClose(connection: Connection) {
    this.reactions.onClose(connection)
  }

  onError(connection: Connection) {
    this.reactions.onError(connection)
  }
}

export default {
  async fetch(request, env) {
    return await routePartykitRequest(request, env, {
      onBeforeConnect(_request, lobby) {
        if (!isValidRoom(lobby.name))
          return new Response('Invalid room', { status: 400 })
      },
    }) || new Response('Not found', { status: 404 })
  },
} satisfies ExportedHandler<Env>
