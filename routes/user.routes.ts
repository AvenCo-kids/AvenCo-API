import type { Group, Context } from 'https://deno.land/x/abc@v1.2.3/mod.ts';

/**
 * Routes for user section
 */
export default function (g: Group) {

    /**
     * Sign up an user
     * @body {string} username - mail of the account to sing up
     * @body {string} mail - mail of the account to sign up
     * @body {encrypted string} password - password of the account to sign up
     */
    g.post('/signup', (c: Context) => {
        return ("Not implemented");
    })

    /**
     * Login an user
     * @body {string} mail - mail of the account to log in
     * @body {encrypted string} password - password of the account to log in
     */
    g.post('/login', (c: Context) => {
        return ("Not implemented");
    })

}
