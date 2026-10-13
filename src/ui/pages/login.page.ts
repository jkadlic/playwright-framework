import type { IPage } from "../page.interface";
import type { Locator, Page } from "@playwright/test";
import { Timeout, TimeoutTypes } from "../../constants";

export default class LoginPage implements IPage {
    private readonly form: Locator;
    private readonly loginEmail: Locator;
    private readonly loginPassword: Locator;
    private readonly loginSubmit: Locator;
    private readonly signupUsername: Locator;
    private readonly signupEmail: Locator;
    private readonly signupSubmit: Locator;

    public constructor(page: Page) {
        this.form = page.locator("section[id='form']");
        const loginForm = this.form.locator("div[class='login-form']");
        this.loginEmail = loginForm.getByRole("textbox", { name: "email" });
        this.loginPassword = loginForm.getByRole("textbox", { name: "password" });
        this.loginSubmit = loginForm.getByRole("button", { name: "Login" });
        const signupForm: Locator = this.form.locator("div[class='signup-form']");
        this.signupUsername = signupForm.getByRole("textbox", { name: "name" });
        this.signupEmail = signupForm.getByRole("textbox", { name: "email" });
        this.signupSubmit = loginForm.getByRole("button", { name: "Signup" });
    }

    public async waitFor(): Promise<void> {
        await this.form.isVisible({ timeout: Timeout[TimeoutTypes.LoadPage] });
    }

    public async login(username: string, password: string): Promise<void> {
        await this.loginEmail.fill(username);
        await this.loginPassword.fill(password);
        await this.loginSubmit.click();
    }

    public async signup(username: string, email: string): Promise<void> {
        await this.signupUsername.fill(username);
        await this.signupEmail.fill(email);
        await this.signupSubmit.click();
    }
}
