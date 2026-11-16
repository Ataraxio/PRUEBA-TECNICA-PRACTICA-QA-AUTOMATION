import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  //await page.goto(`${process.env.BASE_URL}`);

  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('ataraxio');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Zu8ae!5XesCyN');
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.getByRole('link', { name: 'Bill Pay' }).click();
  await page.locator('input[name="payee.name"]').click();
  await page.locator('input[name="payee.name"]').fill('Payee Name1');
  await page.locator('input[name="payee.address.street"]').click();
  await page.locator('input[name="payee.address.street"]').fill('Addr1');
  await page.locator('input[name="payee.address.city"]').click();
  await page.locator('input[name="payee.address.city"]').fill('City1');
  await page.locator('input[name="payee.address.state"]').click();
  await page.locator('input[name="payee.address.state"]').fill('State1');
  await page.locator('input[name="payee.address.zipCode"]').click();
  await page.locator('input[name="payee.address.zipCode"]').fill('ZipCode1');
  await page.locator('input[name="payee.phoneNumber"]').click();
  await page.locator('input[name="payee.phoneNumber"]').fill('123456');
  await page.locator('input[name="payee.accountNumber"]').click();
  await page.locator('input[name="payee.accountNumber"]').fill('22225');
  await page.locator('input[name="verifyAccount"]').click();
  await page.locator('input[name="verifyAccount"]').fill('22225');
  await page.locator('input[name="amount"]').click();
  
  //A Negative Test Case: Attempting to send a bill payment with a negative amount
  await page.locator('input[name="amount"]').fill('-5');
  await page.getByRole('button', { name: 'Send Payment' }).click();

  //Asertion to verify that the bill payment was NOT successful - Negative Test Case
  await expect(page.getByText('Bill Payment Complete')).toHaveCount(0);

});