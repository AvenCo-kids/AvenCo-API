import type { Group, Context } from 'https://deno.land/x/abc@v1.2.3/mod.ts';
import type { NewUser } from '../models/user.model.ts';
import createUser from '../actions/user/signUp.ts';
import login from '../actions/user/login.ts';

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
    g.post('/signup', async (c: Context) => {
        const body: NewUser = await c.body as NewUser;
        return createUser(c, body);
    })

    /**
     * Login an user
     * @body {string} mail - mail of the account to log in
     * @body {encrypted string} password - password of the account to log in
     */
    g.post('/login', async (c: Context) => {
        const { mail, password } = await c.body as {mail: string, password: string};
        return login(c, mail, password);
    })

}
