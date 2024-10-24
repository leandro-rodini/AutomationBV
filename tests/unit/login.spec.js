const userFixture = require('../../Fixtures/user.fixture.js');
const pagesFixture = require('../../Fixtures/pages.fixture.js');
const { test, expect } = require('@playwright/test');


test.describe('Login Feature', () => {

  test('Access to user with valid User', async ({ page }) => {
    // Navega para a página de login
    await page.goto('https://black-sky-04fb36810.4.azurestaticapps.net/');

    await page.click(pagesFixture.login.alreadyRegisteredButton);
    
    await page.fill(pagesFixture.login.cpfField, userFixture.validUser.cpf);

    await page.fill(pagesFixture.login.passwordField, userFixture.validUser.password);

    await page.click(pagesFixture.login.loginButton);

    // Assert
    const span = page.locator(pagesFixture.login.confirmationTextValidUser);
    await expect(span).toBeVisible({ timeout: 5000 });
  });

  test('Access to user with Invalid User', async ({ page }) => {
    // Navega para a página de login
    await page.goto('https://black-sky-04fb36810.4.azurestaticapps.net/');

    await page.click(pagesFixture.login.alreadyRegisteredButton);

    await page.fill(pagesFixture.login.cpfField, userFixture.invalidUser.cpf);

    await page.fill(pagesFixture.login.passwordField, userFixture.invalidUser.password);

    await page.click(pagesFixture.login.loginButton);

    // Assert
    const span = page.locator(pagesFixture.login.confirmationTextInvalidUser);
    await expect(span).toBeVisible({ timeout: 15000 });
  });
});