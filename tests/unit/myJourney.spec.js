const { test, expect } = require('@playwright/test');
const { Token_Refresh  } = require('../../utils/Token.js');
const pagesFixture = require('../../Fixtures/pages.fixture.js');

test.describe('My Journey Feature', () => {

    test('Access to my journey feature', async ({ page }) => {
    
    // Refresh com token para tela home
    await Token_Refresh(page);

    await page.click(pagesFixture.myjourney.journeyButton);

    // Assert
    const span = page.locator(pagesFixture.myjourney.confirmationText);
    await expect(span).toBeVisible({ timeout: 15000 });
    });
});