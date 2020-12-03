import { db } from '../utils/dataBase.ts';
import type { Story, NewStory } from '../models/story.model.ts';
import { ObjectId } from "https://deno.land/x/mongo@v0.20.0/bson/mod.ts";

const database = db.getDatabase;
const stories = database.collection<Story>('stories');

/**
 * Create a new story and return it's id
 * @param {NewStory} newStory - Story to create
 * @returns {ObjectId} - Id of the created story
 */
export const createStory = async (newStory: NewStory): Promise<ObjectId> => {
    const fullStory = newStory as Story;
    const insertedId = await stories.insertOne(fullStory);
    return (insertedId as ObjectId);
}

/**
 * Search for a story with this id
 * @param {string} storyId - Id of the story to look for
 * @returns {Story} - Story found
 * @throws 'Bad id'
 * @throws 'Not found'
 */
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

/**
 * Find stories by name. Can have more than one.
 * @param {string} name - Name to look for
 * @param {number} skip - Offset of the list to give
 * @param {number} limit - How much the list can have
 * @returns {Story[]}
 */
export const findByName = async (name: string, skip: number = 0, limit: number = 10) => {
    const storys = await stories.find({name}).skip(skip).limit(limit).toArray();

    return (storys);
}

/**
 * Find stories by name. Can have more than one. Return only id and name
 * @param {string} name - Name to look for
 * @param {number} skip - Offset of the list to give
 * @param {number} limit - How much the list can have
 * @returns {Story[]} - Only _id and name
 */
export const findShortByName = async (name: string, skip: number = 0, limit: number = 10) => {
    const storys = await stories.find({name}, {projection: {_id: 1, name: 1}}).skip(skip).limit(limit).toArray();

    return (storys);
}

/**
 * Get all stories
 * @param {number} skip - Offset of the list to give
 * @param {number} limit - Hove much the list can have
 * @returns {Story[]}
 */
export const findAll = async (skip: number = 0, limit: number = 10) => {
    const storys = await stories.find().skip(skip).limit(limit).toArray();

    return (storys);
}

/**
 * Delete a story by it's id
 * @param {string} storyId - Id of the story to delete
 * @throws 'Bad id'
 * @throws 'Not found'
 */
export const deleteById = async (storyId: string) => {
    var id;
    try {
        id = new ObjectId(storyId)
    } catch (error) {
        throw new Error('Bad id');
    }
    console.log({_id: id});
    const res = await stories.deleteOne({_id: id});

    if (res == 0)
        throw new Error('Not found');
}