import { expect, test } from "vitest";
import { Authenticatable } from "../lib/Authenticatable";

const clientId = process.env.SUBSPLASH_CLIENT_ID;
const clientSecret = process.env.SUBSPLASH_CLIENT_SECRET;
const appKey = process.env.SUBSPLASH_SCOPE;

test("Authenticates to Subplash API", async () => {
    const auth = new Authenticatable();
    const response = await auth.authenticate({
        clientId,
        clientSecret,
        appKey,
    });

    expect(auth.authentication).toBeDefined();
    expect(auth.authentication).toHaveProperty("access_token");
});

test("Get header returns token", async () => {
    const auth = new Authenticatable();
    const response = await auth.authenticate({
        clientId,
        clientSecret,
        appKey,
    });

    const header = await auth.get_authorization_header();

    expect(header).toBeDefined();
    expect(header).toHaveProperty("Authorization");
    expect(header?.Authorization).toContain("Bearer");
});
