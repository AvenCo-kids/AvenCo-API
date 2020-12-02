import { NewStory, Story } from '../../models/story.model.ts'
import { createStory } from '../../services/story.service.ts';
import type { Group, Context } from "https://deno.land/x/abc@v1.2.3/mod.ts";

/**
 * Create a new story by calling the service 'createStory'
 * @param {Context} c - Context of the HTTP request
 * @param {NewStory} newStory - New story to add to the database
 * @returns {Story} - Story, with code 200
*/
export default async function (c: Context, newStory: NewStory) {
    const idStory = await createStory(newStory);
    const story = newStory as Story;
    story._id = idStory;
    return (c.json(story, 200));
}
