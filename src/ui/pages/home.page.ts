import type { Locator, Page} from "@playwright/test";
import type { IRoutablePage } from "../page.interface";
import {BASE_URL} from "../../constants";
import NavComponent from "../components/nav.component";
import GalleryComponent from "../components/gallery.component";

export default class HomePage implements IRoutablePage {
    
    private readonly page: Page;
    
    // Composed POMs are public
    public readonly nav: NavComponent;
    public readonly gallery: GalleryComponent;
    
    public constructor(page: Page) {
        this.page = page;
        this.nav = new NavComponent(page);
        this.gallery = new GalleryComponent(page);
    }

    public async waitFor(): Promise<void> {
        await this.gallery.waitFor();
    }
    
    public async goTo(): Promise<void> {
        await this.page.goto(BASE_URL);
        await this.waitFor();
    }
}