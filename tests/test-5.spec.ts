import { test, expect } from '@playwright/test';

test('Проверка атрибута href', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute(
    'href',
    '/docs/api/class-playwright',
  );
  await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute(
    'href',
    '/community/welcome',
  );
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute(
    'href',
    'https://github.com/microsoft/playwright',
  );
  await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute(
    'href',
    'https://aka.ms/playwright/discord',
  );
});

test('Проверка переключения темы', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light', { timeout: 5000 });
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark', { timeout: 5000 });
});

test('Проверка корректного текста в тайтле ', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
    'Playwright enables reliable end-to-end testing for modern web apps.',
  );
});

test('Проверка ', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Get started');
});

test('Проверка123 ', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Get started');
  await expect(page.getByRole('banner')).toContainText('Get started');
  await expect(page.getByRole('banner')).toContainText('Get started');
});
