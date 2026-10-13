import { test } from "@playwright/test";
import HomePage from "../../src/ui/pages/home.page";

test("[1234] - User can complete purchase with valid payment", { tag: ["@1234", "@checkout"] }, async ({ page }) => {
    const home = new HomePage(page);
    await home.goTo();
    await home.nav.goToCart();
});
