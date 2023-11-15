import { test, expect } from '@playwright/test';

test('/users', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/users');
  var signinOk = page.getByText('Users')
  await expect(signinOk).toBeVisible();
  await page.getByRole('link', { name: 'New user' }).click()
  await page.waitForURL('http://127.0.0.1:3000/users/new')
  var newUser = page.getByText('New user')
  await expect(newUser).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/laptops');
  // var laptop = page.getByText('Laptops')
  // await expect(laptop).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/blogs');
  // var blogs = page.getByText('Blogs')
  // await expect(blogs).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/users');
  // var signinOk = page.getByText('Users')
  // await expect(signinOk).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/laptops');
  // var laptop = page.getByText('Laptops')
  // await expect(laptop).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/blogs');
  // var blogs = page.getByText('Blogs')
  // await expect(blogs).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/users');
  // var signinOk = page.getByText('Users')
  // await expect(signinOk).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/laptops');
  // var laptop = page.getByText('Laptops')
  // await expect(laptop).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/blogs');
  // var blogs = page.getByText('Blogs')
  // await expect(blogs).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/users');
  // var signinOk = page.getByText('Users')
  // await expect(signinOk).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/laptops');
  // var laptop = page.getByText('Laptops')
  // await expect(laptop).toBeVisible();

  // await page.goto('http://127.0.0.1:3000/blogs');
  // var blogs = page.getByText('Blogs')
  // await expect(blogs).toBeVisible();
});
