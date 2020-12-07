import {
    create,
    verify,
    Payload,
    Header,
} from "https://deno.land/x/djwt@v1.9/mod.ts";

import { MiddlewareFunc } from "https://deno.land/x/abc@v1/mod.ts";

import { User } from "../models/user.model.ts";
import { findByMail, findByName } from "../services/user.service.ts";

export const JwtConfig = {
    header: "Authorization",
    schema: "Bearer",
    secretKey: Deno.env.get("JWTSECRET") || "",
    expirationTime: 60000,
    type: "JWT",
    alg: "HS256",
};

export const generateJwt = (user: User) => {
    const payload: Payload = {
        mail: user.mail,
        name: user.name,
    };
    const header: Header = {
        alg: "HS256",
        typ: "JWT",
    };

    return create(header, payload, JwtConfig.secretKey);
}

export const JwtAuth: MiddlewareFunc = (next) => async (c) => {
    const token = c.request.headers
        .get(JwtConfig.header)
        ?.replace(`${JwtConfig.schema} `, '');

    if (!token) {
        return c.string("Unauthorized", 401);
    }

    let jwtRes;

    try {
        jwtRes = await verify(token, JwtConfig.secretKey, "HS256");
    } catch (err) {
        throw new Error(err);
    }

    const payload = jwtRes.payload as {mail: string, name: string};
    try {
        const user = await findByMail(payload.mail);

        if (user.name != payload.name)
            throw new Error('Bad account');
    } catch (err) {
        if (err.message == 'Not found')
            return c.string('Wrong token', 401);
        throw err;
    }

    return next(c);
}
