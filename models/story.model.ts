export interface Story {
    _id: {
        $oid: string;
    };
    name: string;
};

export interface NewStory {
    name: string;
}