import { expect, test } from '@playwright/test'

test('audience pages preserve the current slide and reveal step while presentation sync still works', async ({ page, context, browser, baseURL }) => {
  const presenter = await context.newPage()
  // Slide 7 has a reveal step; neither the slide nor that step may be reset.
  await page.goto('/7?room=navigation&clicks=1')
  await expect(page.locator('.slidev-slide-content')).toBeVisible()
  await presenter.goto('/presenter/7?room=navigation&clicks=1')
  await expect(presenter.locator('.slidev-presenter')).toBeVisible()

  const presentationChanges: string[] = []
  for (const tab of [page, presenter]) {
    tab.on('framenavigated', frame => {
      if (frame === tab.mainFrame()) {
        const url = new URL(frame.url())
        presentationChanges.push(url.pathname + url.search)
      }
    })
  }

  const phoneContext = await browser.newContext({ baseURL })
  for (const audienceContext of [context, phoneContext]) {
    const audience = await audienceContext.newPage()
    await audience.goto('/live?room=navigation')
    await expect(audience.getByRole('status')).toHaveText('Connected to the talk')
    await audience.reload()
    await expect(audience.getByRole('status')).toHaveText('Connected to the talk')
    await audience.getByRole('link', { name: 'Sources', exact: true }).click()
    await expect(audience.getByRole('heading', { name: 'Sources', exact: true })).toBeVisible()
    await audience.reload()
    await expect(audience.getByRole('heading', { name: 'Sources', exact: true })).toBeVisible()
    await audience.getByRole('link', { name: 'Back to live reactions' }).click()
    await expect(audience.getByRole('status')).toHaveText('Connected to the talk')

    await expect(page).toHaveURL(/\/7\?room=navigation&clicks=1$/)
    await expect(presenter).toHaveURL(/\/presenter\/7\?room=navigation&clicks=1$/)
  }

  expect(presentationChanges.filter(url => !/^\/(?:presenter\/)?7\?room=navigation&clicks=1$/.test(url))).toEqual([])

  // Exercise sync in both directions after visiting the audience pages.
  await presenter.keyboard.press('ArrowDown')
  await expect(page).toHaveURL(/\/8\?room=navigation(?:&clicks=0)?$/)
  await page.keyboard.press('ArrowDown')
  await expect(presenter).toHaveURL(/\/presenter\/9\?room=navigation(?:&clicks=0)?$/)
  for (const audience of [...context.pages(), ...phoneContext.pages()].filter(tab => tab !== page && tab !== presenter))
    await expect(audience).toHaveURL(/\/live\?room=navigation$/)
  await phoneContext.close()
})
