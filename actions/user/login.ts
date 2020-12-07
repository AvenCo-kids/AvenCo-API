import { checkPassword, findByMail } from '../../services/user.service.ts';
import { generateJwt } from '../../utils/jwt.ts';
import type { Context } from 'https://deno.land/x/abc@v1.2.3/mod.ts';

/**
 * Login an user, and check for possible errors
 * @param {Context} c - Context of the HTTP request
 * @param {string} mail - String that represent the email of the user
 * @param {string} password - String that represent the password of the user
 * @returns {string} - String that represent the JWT of the user
 */
export default async function(c: Context, mail: string, password: string) {
    const user = await findByMail(mail);

    if (!(await checkPassword(user, password))) {
        return c.string('Bad credentials', 401);
    }

    const token = await generateJwt(user);
    c.string(token, 200);
}
