import { findById } from '../../services/story.service.ts';
import type { Context } from "https://deno.land/x/abc@v1.2.3/mod.ts";

/**
 * Get a story by calling the service 'findById'
 * @param {Context} c - Context of the HTTP request
 * @param {string} storyId - Id of the story to delete
 * @return {Story} - Story found
*/
export default async function (c: Context, storyId: string) {
    const story = await findById(storyId);
    return (c.json(story, 200));
}
