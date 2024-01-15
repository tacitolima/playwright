import { test, expect } from '@playwright/test';


test.use({ 
    locale: 'pt-BR',
    headless: true
  });


test.beforeEach(async ({ page }) => {
    global.page = page
});

test.afterEach(async ({ page }) => {
    await page.close();
});



test('Validar tela principal da amazon', async () => {

    await test.step('Navego para tela principal da amazon.com', async () => {
        await page.goto('https://www.amazon.com.br/');
    })

    await test.step('Tela principal da amazon é apresentada', async () => {
        const currentUrl = page.url();
        expect(currentUrl).toBe('https://www.amazon.com.br/')
    })

    await test.step('Valido tela principal da amazon', async () => {
        await page.waitForSelector('#nav-logo-sprites');
        const logoElement = page.locator('#nav-logo-sprites');
        const searchInput = page.locator('#twotabsearchtextbox');
        const searchButton = page.locator('.nav-search-submit');
        
        await expect(logoElement).toBeVisible();
        await expect(searchInput).toBeVisible();
        await expect(searchButton).toBeVisible();
        
    })

});