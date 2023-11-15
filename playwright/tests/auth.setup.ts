import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/signin');
  await page.getByLabel('Email').fill('email1@gmail.com')
  await page.getByLabel('Password').fill('password')
  await page.getByRole('button', { name: 'Save' }).click()
  // Expect a title "to contain" a substring.
  const signinOk = await page.getByText('Signin OK!')
  await expect(signinOk).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});