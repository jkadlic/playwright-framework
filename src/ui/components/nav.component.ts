import type {Locator, Page} from "@playwright/test";
import HomePage from "../pages/home.page";
import CartPage from "../pages/cart.page";
import LoginPage from "../pages/login.page";

export default class NavComponent {
    
    private readonly page: Page;
    private readonly home: Locator;
    private readonly cart: Locator;
    private readonly login: Locator;
    
    public constructor(page: Page) {
        this.page = page;
        this.home = page.locator('a[href="/"]');
        this.cart = page.getByRole('link', { name: 'Cart', exact: false });
        this.login = page.locator('a[href="/login"]');
    }
    
    public async goToHome(): Promise<void> {
        await this.home.click();
        await new HomePage(this.page).waitFor();
    }
    
    public async goToCart(): Promise<void> {
        await this.cart.click();
        await new CartPage(this.page).waitFor();
    }
    
    public async goToLogin(): Promise<void> {
        await this.login.click();
        await new LoginPage(this.page).waitFor();
    }
}