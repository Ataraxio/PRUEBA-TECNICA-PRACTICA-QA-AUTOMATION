import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('ataraxio');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Zu8ae!5XesCyN');
  await page.getByRole('button', { name: 'Log In' }).click();
});