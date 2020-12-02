/**
 * Import abc to create routes
*/
import type { Group, Context } from "https://deno.land/x/abc@v1.2.3/mod.ts";

/**
 * Routes for story section
 */
export default function (g: Group) {

    /**
     * Launch a story on a teddy bear
     * @path {string} id - Id of the teddy
     * @path {string} storyId - Id of the story
     */
<<<<<<< HEAD
    g.get('/story/launchStory/:id/:storyId', (c: Context) => {
=======
    g.get('/launchStory/:id/:storyId', (c: Context) => {
>>>>>>> bd8abcd94b33da0addf169a23ff50ea03db4f696
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
<<<<<<< HEAD
    g.get('/story/getStory/:storyId', (c: Context) => {
=======
    g.get('/archStory/:storyId', (c: Context) => {
>>>>>>> bd8abcd94b33da0addf169a23ff50ea03db4f696
        const { storyId } = c.params;
        return "{}";
    })

    /**
     * Get the list of the stories avaible on the server
     * This list will give you, the names and ids of the stories
     */
<<<<<<< HEAD
    g.get('/story', (c: Context) => {
=======
    g.get('/storyList', (c: Context) => {
>>>>>>> bd8abcd94b33da0addf169a23ff50ea03db4f696
        return "{}";
    })

    /**
     * Create a story on the server
     * Body : architecture of the story, JSON format
     * ( ! Architecture format: UNDEFINED)
     * @body {any} body - Architecture of the story to create
     */
    /** Technical comment : remove any, 2 lines under "const body any" */
<<<<<<< HEAD
    g.post('/story', async (c: Context) => {
=======
    g.post('/createStory', async (c: Context) => {
>>>>>>> bd8abcd94b33da0addf169a23ff50ea03db4f696
        const body: any = await c.body;
        return "{}";
    })

<<<<<<< HEAD
    /**
     * Delete a story on the server
     * @path {string} storyId - Id of the story
     */
    g.delete('/story/:storyId', async (c: Context) => {
        const { storyId } = c.params;
        return "{}";
    })

=======
>>>>>>> bd8abcd94b33da0addf169a23ff50ea03db4f696
}
