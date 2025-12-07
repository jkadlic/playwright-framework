import { Locator, Page} from "@playwright/test";
import { IRoutablePage } from "../page.interface";
import {BASE_URL, Timeout, TimeoutTypes} from "../../constants";
import HeaderComponent from "../components/header.component";
import GalleryComponent from "../components/gallery.component";

export default class HomePage implements IRoutablePage {
    
    private readonly page: Page;
    
    // Composed POMs are public
    public readonly header: HeaderComponent;
    public readonly gallery: GalleryComponent;
    
    public constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(page);
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