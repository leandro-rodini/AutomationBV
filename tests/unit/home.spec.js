const { test, expect } = require('@playwright/test');
const { Token_Refresh  } = require('../../utils/Token.js');
const pagesFixture = require('../../Fixtures/pages.fixture.js');

test.describe('Access to home page feature', () => {

  test('Validation home page', async ({ page }) => {
    // Refresh com token para tela home
    await Token_Refresh(page);
  
    // Assertawait page.fill(cpfField, userFixture.validUser.cpf);
    const span = page.locator(pagesFixture.home.confirmationText);
    await expect(span).toBeVisible({ timeout: 10000 });
  });
});