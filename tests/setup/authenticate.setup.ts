import { authFixtures as setup } from "../../fixtures/auth";
import HomePage from "../../src/ui/pages/home.page";
import LoginPage from "../../src/ui/pages/login.page";
import { join } from "node:path";

const CONTEXT_STATE_PATH: string = join(import.meta.dirname, "../../.context/state.json");

setup("authenticate", async ({ page, credentials }) => {
    const home = new HomePage(page);
    await home.goTo();
    await home.nav.goToLogin();

    const login = new LoginPage(page);

    // TODO: Load environment variables in fixture where they can be validated.
    await login.login(credentials.email, credentials.password);

    await page.context().storageState({ path: CONTEXT_STATE_PATH });
});
