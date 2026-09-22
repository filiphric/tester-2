import { expect, test, type Page } from '@playwright/test'

async function showControls(page: Page) {
  await page.mouse.move(200, 705)
}

test('phone reactions reach the deck once, survive navigation, and mute across presenter tabs', async ({ page, context, browser }) => {
  const errors: string[] = []
  const sockets: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('websocket', socket => sockets.push(socket.url()))
  await page.goto('/1?room=rehearsal')
  await showControls(page)
  await expect(page.getByRole('button', { name: 'Reactions off' })).toBeVisible()
  expect(sockets).toHaveLength(0)
  page.once('dialog', dialog => dialog.dismiss())
  await page.getByRole('button', { name: 'Reactions off' }).click()
  await expect(page.getByRole('button', { name: 'Reactions off' })).toHaveAttribute('aria-pressed', 'false')

  page.once('dialog', async (dialog) => {
    page.once('dialog', alert => alert.dismiss())
    await dialog.accept('incorrect')
  })
  await page.getByRole('button', { name: 'Reactions off' }).click()
  await expect(page.getByRole('button', { name: 'Reactions off' })).toHaveAttribute('aria-pressed', 'false')

  page.once('dialog', dialog => dialog.accept('K2jk-1dns'))
  await page.getByRole('button', { name: 'Reactions off' }).click()
  const joinLink = page.getByRole('link', { name: /REACT LIVE/ })
  await expect(joinLink).toHaveAttribute('href', 'https://slides.filiphric.com/tester-2/live?room=rehearsal')
  await expect(joinLink.getByRole('img')).toBeVisible()
  await page.screenshot({ path: 'test-results/reactions-cover.png' })
  await expect.poll(() => sockets.length).toBe(1)

  const audienceContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })
  const audience = await audienceContext.newPage()
  await audience.goto('http://127.0.0.1:3040/live?room=rehearsal')
  await expect(audience.getByRole('status')).toHaveText('Connected to the talk')
  await expect(audience.getByRole('button')).toHaveCount(9)
  await expect(audience.locator('.live-page')).toHaveJSProperty('scrollWidth', 390)
  await audience.screenshot({ path: 'test-results/reactions-mobile.png' })
  await audience.setViewportSize({ width: 320, height: 700 })
  await expect(audience.locator('.live-page')).toHaveJSProperty('scrollWidth', 320)
  await audience.getByRole('button', { name: 'Send Applause reaction' }).click()
  await expect(page.locator('.floating-reaction')).toHaveCount(1)
  await expect(page.locator('.floating-reaction')).toHaveText('👏')
  await expect(audience.locator('.floating-reaction')).toHaveCount(1)
  await expect(page.locator('.floating-reaction')).toHaveCount(0)

  await page.keyboard.press('ArrowRight')
  await expect(page).toHaveURL(/\/2\?room=rehearsal/)
  await audience.getByRole('button', { name: 'Send Love it reaction' }).click()
  await expect(page.locator('.floating-reaction')).toHaveText('❤️')
  expect(sockets).toHaveLength(1)

  const presenter = await context.newPage()
  await presenter.goto('/presenter/2?room=rehearsal')
  await showControls(presenter)
  presenter.once('dialog', dialog => dialog.accept('K2jk-1dns'))
  await presenter.getByRole('button', { name: 'Reactions on' }).click()
  await expect(page.locator('.reaction-effects')).toHaveCount(0)
  await audience.getByRole('button', { name: 'Send Brilliant reaction' }).click()
  await expect(page.locator('.floating-reaction')).toHaveCount(0)
  await expect(presenter.locator('.floating-reaction')).toHaveCount(0)
  expect(errors).toEqual([])
  await audienceContext.close()
})

test('room isolation, reconnect, reduced motion, and export remain correct', async ({ page, context, browser }) => {
  await page.goto('/1?room=isolated')
  await showControls(page)
  page.once('dialog', dialog => dialog.accept('K2jk-1dns'))
  await page.getByRole('button', { name: 'Reactions off' }).click()

  const audienceContext = await browser.newContext()
  const audience = await audienceContext.newPage()
  await audience.goto('http://127.0.0.1:3040/live?room=another-talk')
  await expect(audience.getByRole('status')).toHaveText('Connected to the talk')
  await audience.getByRole('button', { name: 'Send Agree reaction' }).click()
  await expect(audience.locator('.floating-reaction')).toHaveCount(1)
  await expect(page.locator('.floating-reaction')).toHaveCount(0)

  await audience.goto('http://127.0.0.1:3040/live?room=isolated')
  await expect(audience.getByRole('status')).toHaveText('Connected to the talk')
  await audienceContext.setOffline(true)
  await expect(audience.getByRole('status')).toHaveText('Connection lost. Reconnecting…')
  await expect(audience.getByRole('button').first()).toBeDisabled()
  await audienceContext.setOffline(false)
  await expect(audience.getByRole('status')).toHaveText('Connected to the talk', { timeout: 15000 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await audience.getByRole('button', { name: 'Send Mind blown reaction' }).click()
  await expect(page.locator('.floating-reaction')).toHaveText('🤯')
  await expect(page.locator('.floating-reaction')).toHaveCSS('animation-name', /^reaction-fade/)
  await expect(page.locator('.floating-reaction')).toHaveCount(0)

  const print = await context.newPage()
  const printSockets: string[] = []
  print.on('websocket', socket => printSockets.push(socket.url()))
  await print.goto('/1?room=isolated&print')
  await expect(print.locator('.slidev-slide-content')).toBeVisible()
  await expect(print.locator('.reaction-effects')).toHaveCount(0)
  await expect(print.locator('.live-join')).toHaveCount(0)
  expect(printSockets).toHaveLength(0)
  await print.pdf({ path: 'test-results/reactions-export.pdf', width: '1280px', height: '720px' })

  const overview = await context.newPage()
  const overviewSockets: string[] = []
  overview.on('websocket', socket => overviewSockets.push(socket.url()))
  await overview.goto('/overview?room=isolated')
  await expect(overview.locator('.reaction-effects')).toHaveCount(0)
  expect(overviewSockets).toHaveLength(0)

  await audience.goto('http://127.0.0.1:3040/live?room=INVALID')
  await expect(audience.getByRole('status')).toHaveText('Invalid session link')
  await expect(audience.getByRole('button').first()).toBeDisabled()
  await audienceContext.close()
})
