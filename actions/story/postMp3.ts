import { writeFile } from '../../services/file.service.ts';
import { findById } from "../../services/story.service.ts";
import type { Context } from 'https://deno.land/x/abc@v1.2.3/mod.ts';

export default async function (c: Context, storyId: string, archive: { filename: string, type: string, content: Uint8Array }) {
    
}