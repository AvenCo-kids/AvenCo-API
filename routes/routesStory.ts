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
     * @id id of the teddy
     * @storyId id of the story
     */
    g.get('/launchStory/:id/:storyId', (c: Context) => {
        const { id } = c.params;
        const { storyId } = c.params;
        return "{}";
    })

    /**
     * Get the architecture of a story, JSON format
     * This file, contains the JSON graph and the .mp3 to play
     * It doesn't contains the text of the story
     * @storyId id of the story
     */
    g.get('/archStory/:storyId', (c: Context) => {
        const { storyId } = c.params;
        return "{}";
    })

    /**
     * Get the list of the stories avaible on the server
     * This list will give you, the names and ids of the stories
     */
    g.get('/storyList', (c: Context) => {
        return "{}";
    })

    /**
     * Create a story on the server
     * Body : architecture of the story, JSON format
     * ( ! Architecture format: UNDEFINED)
     */
    /** Technical comment : remove any, 2 lines under "const body any" */
    g.post('/createStory', async (c: Context) => {
        const body: any = await c.body;
        return "{}";
    })

}
