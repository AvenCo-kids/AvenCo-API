import { findShortAll } from '../../services/story.service.ts';
import type { Context } from "https://deno.land/x/abc@v1.2.3/mod.ts";

/**
 * Create a new story by calling the service 'findShortAll'
 * @param {Context} c - Context of the HTTP request
 * @param {number} skip - Offset of the list to give
 * @param {number} limit - How much the list can have
 * @returns {Story[]} - Only _id and name
*/
export default async function (c: Context, skip: number, limit: number) {
    const list = await findShortAll(skip, limit);
    return (c.json(list, 200));
}
