import { expect, test } from '@playwright/test'

test('sources remain accessible from the live page without losing the session', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))

  for (const slide of [11, 12, 13]) {
    await page.goto(`/${slide}?room=sources-rehearsal`)
    await expect(page.locator('.sources-qr')).toHaveCount(0)
  }

  const sources = page
  await sources.goto('/live?room=sources-rehearsal')
  await sources.getByRole('navigation', { name: 'Audience pages' }).getByRole('link', { name: 'Sources', exact: true }).click()
  await sources.setViewportSize({ width: 390, height: 844 })
  await expect(sources).toHaveURL(/\/sources\?room=sources-rehearsal$/)
  await expect(sources.getByRole('heading', { name: 'Sources', exact: true })).toBeVisible()
  await expect(sources.locator('.source-list a')).toHaveCount(16)
  await expect(sources.locator('.sources-page')).toHaveJSProperty('scrollWidth', 390)
  await sources.setViewportSize({ width: 320, height: 700 })
  await expect(sources.locator('.sources-page')).toHaveJSProperty('scrollWidth', 320)

  await sources.getByRole('link', { name: 'Back to live reactions' }).click()
  await expect(sources).toHaveURL(/\/live\?room=sources-rehearsal$/)
  await expect(sources.getByRole('status')).toHaveText('Connected to the talk')
  await sources.getByRole('navigation', { name: 'Audience pages' }).getByRole('link', { name: 'Sources', exact: true }).click()
  await expect(sources).toHaveURL(/\/sources\?room=sources-rehearsal$/)
  await sources.reload()
  await expect(sources.getByRole('heading', { name: 'Sources', exact: true })).toBeVisible()
  await sources.getByRole('navigation', { name: 'Audience pages' }).getByRole('link', { name: 'Live reactions' }).click()
  await expect(sources.getByRole('status')).toHaveText('Connected to the talk')
  await expect(sources.locator('.live-page')).toHaveJSProperty('scrollWidth', 320)
  expect(errors).toEqual([])
})
