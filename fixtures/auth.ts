import { test as base } from "@playwright/test"

export type AuthCredentials = {
    email: string;
    password: string;
};

export type AuthFixtures = {
    credentials: AuthCredentials;
};

export const authFixtures = base.extend<AuthFixtures>({

    credentials: async ({}, use) => {

        var email = process.env.SERVICE_ACCOUNT_EMAIL;
        if (email == "" || email == undefined)
            throw new Error("Invalid or missing environment variable provided 'SERVICE_ACCOUNT_EMAIL'.");

        var password = process.env.SERVICE_ACCOUNT_PASSWORD;
        if (password == "" || password == undefined)
            throw new Error("Invalid or missing environment variable provided 'SERVICE_ACCOUNT_PASSWORD'.");

        await use({ email, password })
    }
})