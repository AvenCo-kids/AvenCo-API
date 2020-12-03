import { deleteById } from '../../services/story.service.ts';
import type { Context } from "https://deno.land/x/abc@v1.2.3/mod.ts";

/**
 * Delete a story by calling the service 'deleteById'
 * @param {Context} c - Context of the HTTP request
 * @param {string} storyId - Id of the story to delete
*/
export default async function (c: Context, storyId: string) {
    await deleteById(storyId);
    return (c.json("ok", 200));
}
