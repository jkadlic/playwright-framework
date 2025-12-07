import {Locator, Page} from "@playwright/test";
import {IPage} from "../page.interface";
import {Timeout} from "../../constants";

export default class CartPage implements IPage {
    
    private page: Page;
    private cart: Locator;
    private emptyCartCard: Locator;
    
    public constructor(page: Page) {
        this.page = page;
        this.cart = page.locator("#cart_items");
        this.emptyCartCard = this.cart.locator("#empty_cart");
    }

    public async waitFor(): Promise<void> {
        await this.cart.waitFor({ state: "visible", timeout: Timeout.TimeoutStateCheck });
    }
    
    public async isCartEmpty(): Promise<void> {
        await this.emptyCartCard.isVisible({ timeout: Timeout.TimeoutStateCheck });
    }
}