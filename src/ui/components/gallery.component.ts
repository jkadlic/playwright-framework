import type { Locator, Page } from "@playwright/test";
import { Timeout, TimeoutTypes } from "../../constants";

export default class GalleryComponent {
    private readonly container: Locator;

    public constructor(page: Page) {
        this.container = page.locator("div[class='features_items']");
    }

    public async waitFor(): Promise<void> {
        await this.container.waitFor({ state: "visible", timeout: Timeout[TimeoutTypes.LoadComponent] });
    }
}
