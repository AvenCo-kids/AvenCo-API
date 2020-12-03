import { writeFile } from '../../services/file.service.ts';
import { findById } from "../../services/story.service.ts";
import type { Context } from 'https://deno.land/x/abc@v1.2.3/mod.ts';

/**
 * Write file to system. And check for story and file type
 * @param {Context} c - Context of the HTTP request 
 * @param {string} storyId - Id of the story
 * @param archive - Contain file name / type and content
 * @returns {ok} - Ok, with code 200
 */
export default async function (c: Context, storyId: string, archive: { filename: string, type: string, content: Uint8Array }) {
    await findById(storyId);
    if (archive.type != 'application/zip')
        return c.string('Bad archive', 400);
    const path = Deno.env.get('DATA_PATH') + 'script';
    await writeFile(archive.content, path, storyId);
    return c.json('ok', 200);
}