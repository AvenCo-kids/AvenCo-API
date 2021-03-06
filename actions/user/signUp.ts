import type { NewUser } from '../../models/user.model.ts';
import { createUser, findByMail } from '../../services/user.service.ts';
import type { Context } from 'https://deno.land/x/abc@v1.2.3/mod.ts';

/**
 * Signup an user, and check for possible for an possible error
 * @param {Context} c - Context of the HTTP request
 * @param {NewUser} newUser - User to register
 * @returns {string} - user's id
 */
export default async function (c: Context, newUser: NewUser) {
    try {
        await findByMail(newUser.mail);
        return c.string('conflict', 409);
    } catch (err) {
        if (err.message != 'Not found') {
            console.log('err: ', err);
            throw err;
        }
    }

    const userId = await createUser(newUser);
    return c.json(userId, 200);
}
