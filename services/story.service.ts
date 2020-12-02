import { db } from '../utils/dataBase.ts';
import type { Story, NewStory } from '../models/story.model.ts';
import { ObjectId } from "https://deno.land/x/mongo@v0.20.0/bson/mod.ts";

const database = db.getDatabase;
const stories = database.collection<Story>('stories');

export const createStory = async (newStory: NewStory) => {
    const fullStory = newStory as Story;
    const insertedId = await stories.insertOne(fullStory);
    return (insertedId);
}

export const findById = async (storyId: string) => {
    var id;
    try {
        id = new ObjectId(storyId)
    } catch (error) {
        throw new Error('Bad id');
    }
    const story = await stories.findOne({_id: id});

    if (story)
        return (story);

    throw new Error('Not found');
}

export const findByName = async (name: string, skip: number = 0, limit: number = 10) => {
    const storys = await stories.find({name}).skip(skip).limit(limit).toArray();

    return (storys);
}

export const findAll = async (skip: number = 0, limit: number = 10) => {
    const storys = await stories.find().skip(skip).limit(limit).toArray();

    return (storys);
}

export const deleteById = async (storyId: string) => {
    var id;
    try {
        id = new ObjectId(storyId)
    } catch (error) {
        throw new Error('Bad id');
    }
    const res = await stories.deleteOne({_id: id});

    if (res == 0)
        throw new Error('Not found');
}