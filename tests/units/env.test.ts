import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts';
import { config } from "https://deno.land/x/dotenv@v1.0.1/mod.ts";
config({safe: true, export: true, path: './.env.defaults'})

/**
 * Test for application env
 */
Deno.test({
    name: "Env check",
    fn(): void {
        assertEquals(Deno.env.get('DB_NAME'), 'aven_co');
        assertEquals(Deno.env.get('DB_HOST_URL'), 'mongodb://127.0.0.1:27017');
    }
})