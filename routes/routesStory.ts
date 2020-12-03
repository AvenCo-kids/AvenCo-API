import { NewStory } from '../models/story.model.ts';
import createStory from '../actions/story/createStory.ts';
import deleteStory from '../actions/story/deleteStory.ts';
import getStory from '../actions/story/getStory.ts';

import type { Group, Context } from 'https://deno.land/x/abc@v1.2.3/mod.ts';

/**
 * Routes for story section
 */
export default function (g: Group) {

    /**
     * Launch a story on a teddy bear
     * @path {string} id - Id of the teddy
     * @path {string} storyId - Id of the story
     */
    g.get('/:id/:storyId', (c: Context) => {
        const { id } = c.params;
        const { storyId } = c.params;
        return "{}";
    })

    /**
     * Get the architecture of a story, JSON format
     * This file, contains the JSON graph and the .mp3 to play
     * It doesn't contains the text of the story
     * @path {string} storyId - Id of the story
     */
    g.get('/:storyId', (c: Context) => {
        const { storyId } = c.params;
        return getStory(c, storyId);
    })

    /**
     * Get the list of the stories avaible on the server
     * This list will give you, the names and ids of the stories
     */
    g.get('/', (c: Context) => {
        return "{}";
    })

    /**
     * Create a story on the server
     * Body : architecture of the story, JSON format
     * @body {any} body - Architecture of the story to create
     */
    g.post('/', async (c: Context) => {
        const body: NewStory = await c.body as NewStory;
        return createStory(c, body);
    })

    /**
     * Delete a story on the server
     * @path {string} storyId - Id of the story
     */
    g.delete('/:storyId', async (c: Context) => {
        const { storyId } = c.params;
        return deleteStory(c, storyId);
    })

}
