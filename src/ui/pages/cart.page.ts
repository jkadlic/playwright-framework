import type { Locator, Page } from "@playwright/test";
import type { IPage } from "../page.interface";
import { Timeout, TimeoutTypes } from "../../constants";

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
        await this.cart.waitFor({ state: "visible", timeout: Timeout[TimeoutTypes.CheckState] });
    }

    public async isCartEmpty(): Promise<void> {
        await this.emptyCartCard.isVisible({ timeout: Timeout[TimeoutTypes.CheckState] });
    }
}
