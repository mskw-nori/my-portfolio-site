import { test, expect } from '@playwright/test'

  test('should navigate to the about page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/')
    // Find an element with the text 'About Page' and click on it
    await page.click('text=ABOUT')
    // The new URL should be "/about" (baseURL is used there)
    await expect(page).toHaveURL('/about')
  })

  test('should navigate to the skills page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/')
    // Find an element with the text 'SKILLS Page' and click on it
    await page.click('text=SKILLS')
    // The new URL should be "/skills" (baseURL is used there)
    await expect(page).toHaveURL('/skills')
  })
