import {Locator, Page} from "@playwright/test";
import HomePage from "../pages/home.page";
import CartPage from "../pages/cart.page";

export enum HeaderLinks {
    Home,
    Cart
}

export default class HeaderComponent {
    
    private readonly page: Page;
    private readonly home: Locator;
    private readonly cart: Locator;
    
    public constructor(page: Page) {
        this.page = page;
        this.home = page.locator('a[href="/"]');
        this.cart = page.getByRole('link', { name: 'Cart', exact: false })
    }
    
    public async goToHome(): Promise<void> {
        await this.home.click();
        await new HomePage(this.page).waitFor();
    }
    
    public async goToCart(): Promise<void> {
        await this.cart.click();
        await new CartPage(this.page).waitFor();
    }
}