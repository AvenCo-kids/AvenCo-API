import { MiddlewareFunc } from "https://deno.land/x/abc@v1/mod.ts";

export const ErrorMiddleware: MiddlewareFunc = (next) => async (c) => {
    try {
        await next(c);
    } catch (err) {
        if (err.message == 'Not found')
            return c.string('Not found', 404);
        if (err.message == 'Bad id')
            return c.string('Bad id', 400);
        if (err.message == 'Bad limit')
            return c.string('Bad limit', 400);
        if (err.message == 'Bad offset')
            return c.string('Bad offset', 400);
        console.error(err);
        return c.string(err.message, err.code ? err.code : 500);
    }
};
