import assert from 'node:assert/strict'
import { test } from 'node:test'
import type * as Party from 'partykit/server'
import ReactionServer from '../partykit/server.ts'
import { isValidRoom, parseReaction, reactionOptions, takeToken } from '../shared/reactions.ts'

test('the protocol accepts only a single supported reaction', () => {
  for (const { emoji } of reactionOptions)
    assert.equal(parseReaction(`reaction:${emoji}`), emoji)
  for (const message of ['reaction:hello', 'reaction:👏👏', 'reaction:<script>', 'reaction:1', 'clear', 'reaction:👏\n', 'x'.repeat(10000), new ArrayBuffer(10), null])
    assert.equal(parseReaction(message), undefined)
})

test('rooms are bounded URL-safe session identifiers', () => {
  for (const room of ['tester-2', 'starwest-2026', 'a', 'a'.repeat(64)])
    assert.equal(isValidRoom(room), true)
  for (const room of ['', '../other', 'room/other', '-start', 'UPPERCASE', 'a'.repeat(65)])
    assert.equal(isValidRoom(room), false)
})

test('rate limiting permits a burst, then replenishes without banking unlimited tokens', () => {
  const bucket = { tokens: 4, updatedAt: 1000 }
  for (let i = 0; i < 4; i++)
    assert.equal(takeToken(bucket, 4, 2, 1000), true)
  assert.equal(takeToken(bucket, 4, 2, 1000), false)
  assert.equal(takeToken(bucket, 4, 2, 1499), false)
  assert.equal(takeToken(bucket, 4, 2, 1500), true)
  assert.equal(takeToken(bucket, 4, 2, 1500), false)
  assert.equal(takeToken(bucket, 4, 2, 1000000), true)
  assert.equal(bucket.tokens, 3)
})

function makeServer(id = 'test-room') {
  const messages: string[] = []
  const room = { id, broadcast: (message: string) => messages.push(message) } as unknown as Party.Room
  return { server: new ReactionServer(room), messages }
}

test('server validates before broadcasting and limits each connection', () => {
  const { server, messages } = makeServer()
  const sender = {} as Party.Connection
  server.onMessage('reaction:untrusted text', sender)
  server.onMessage(new ArrayBuffer(64), sender)
  assert.equal(messages.length, 0)
  for (let i = 0; i < 20; i++)
    server.onMessage('reaction:👏', sender)
  assert.deepEqual(messages, Array(4).fill('reaction:👏'))
  server.onMessage('reaction:🔥', {} as Party.Connection)
  assert.equal(messages.at(-1), 'reaction:🔥')
})

test('a crowd cannot exceed the room burst budget and rooms remain independent', () => {
  const first = makeServer('first-talk')
  const second = makeServer('second-talk')
  for (let i = 0; i < 100; i++)
    first.server.onMessage('reaction:❤️', {} as Party.Connection)
  assert.equal(first.messages.length, 30)
  assert.equal(second.messages.length, 0)
  second.server.onMessage('reaction:🤯', {} as Party.Connection)
  assert.deepEqual(second.messages, ['reaction:🤯'])
})

test('invalid room connections are rejected', () => {
  const request = new Request('https://example.com') as Party.Request
  const rejected = ReactionServer.onBeforeConnect(request, { id: '../bad' } as Party.Lobby)
  assert.ok(rejected instanceof Response)
  assert.equal(rejected.status, 400)
  assert.equal(ReactionServer.onBeforeConnect(request, { id: 'valid-room' } as Party.Lobby), request)
})
