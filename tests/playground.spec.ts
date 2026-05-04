import { test, expect } from '@playwright/test';

test.describe('Playground', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/spielwiese'); 
    });

    test('should add and rename a new party', async ({ page }) => {
        // 1. Get all party input fields
        const partyEntries = page.locator('.input_field_vote_party:has(.edit-icon-btn)');
        const initialCount = await partyEntries.count();

        // 2. Add a party
        await page.click('.add-party-btn');
        await expect(partyEntries).toHaveCount(initialCount + 1);

        // 3. Enter Edit Mode for the newly added party
        const lastPartyEditBtn = partyEntries.last().locator('.edit-icon-btn');
        await lastPartyEditBtn.click();

        // 4. Change the name
        const nameInput = page.locator('.name-edit-input');
        await nameInput.fill('New Party X');
        await page.keyboard.press('Enter');

        // 5. Verify name change
        await expect(partyEntries.last()).toContainText('New Party X');
    });
});