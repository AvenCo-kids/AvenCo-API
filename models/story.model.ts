import { ObjectId } from "https://deno.land/x/mongo@v0.20.0/bson/mod.ts";

/** Represent a story in the db */
export interface Story {
    _id: ObjectId;
    name: string;
};

/** Represent a story whithout the elements from the db */
export interface NewStory {
    name: string;
}