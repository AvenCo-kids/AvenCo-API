/** Represent a story in the db */
export interface Story {
    _id: {
        $oid: string;
    };
    name: string;
};

/** Represent a story whithout the elements from the db */
export interface NewStory {
    name: string;
}