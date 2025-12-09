import {test as setup} from '@playwright/test';
import HomePage from "../../src/ui/pages/home.page";
import LoginPage from "../../src/ui/pages/login.page";
import {join} from "path";

const CONTEXT_STATE_PATH: string = join(__dirname, "../../.context/state.json");

setup("authenticate", async ({ page }) => {
    
    let home = new HomePage(page);
    await home.goTo();
    await home.nav.goToLogin();
    
    let login = new LoginPage(page);
    // TODO: Load environment variables in fixture where they can be validated.
    await login.login(process.env.SERVICE_ACCOUNT_EMAIL, process.env.SERVICE_ACCOUNT_PASSWORD);

    await page.context().storageState({ path: CONTEXT_STATE_PATH });
});