/** Represent a story in the db */
export interface Story {
    _id: string;
    name: string;
    startPoint: StoryNode;
};

/** Represent a story whithout the elements from the db */
export interface NewStory {
    name: string;
    startPoint: StoryNode;
}

export interface StoryNode {
    hasScript: boolean;
    script: string;
    waitTime: number;
    speach: string;
    output: [{
        outputName: string;
        params: any;
    }];
    node: [{
        inputName: string;
        params: any;
        next: StoryNode;
        tp: boolean;
        path: string;
    }]
}