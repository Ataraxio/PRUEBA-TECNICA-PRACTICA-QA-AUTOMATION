import { test as setup} from '@playwright/test';

setup('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').click();
  await page.locator('[id="customer.firstName"]').fill('ED3');
  await page.locator('[id="customer.lastName"]').click();
  await page.locator('[id="customer.lastName"]').fill('Q3');
  await page.locator('[id="customer.address.street"]').click();
  await page.locator('[id="customer.address.street"]').fill('Address3');
  await page.locator('[id="customer.address.city"]').click();
  await page.locator('[id="customer.address.city"]').fill('Quito3');
  await page.locator('[id="customer.address.state"]').click();
  await page.locator('[id="customer.address.state"]').fill('Pichincha3');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').fill('123');
  await page.locator('[id="customer.phoneNumber"]').click();
  await page.locator('[id="customer.phoneNumber"]').fill('123456');
  await page.locator('[id="customer.ssn"]').click();
  await page.locator('[id="customer.ssn"]').fill('654321');

  await page.locator('[id="customer.username"]').click();
  await page.locator('[id="customer.username"]').fill('ataraxio');
  
  await page.locator('[id="customer.password"]').click();
  await page.locator('[id="customer.password"]').fill('Zu8ae!5XesCyN');
  
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('Zu8ae!5XesCyN');
  await page.getByRole('button', { name: 'Register' }).click();

  // Save authenticated browser state
  await page.context().storageState({
  path: 'playwright/.auth/user.json',
  });

});