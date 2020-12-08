/** Represent a story in the db */
export interface StoryJSON {
    _id?: string;
    name: string;
    startPoint?: StoryNodeJSON;
};

export interface StoryNodeJSON {
    hasScript?: boolean;
    waitTime?: number;
    output?: [{
        outputName: string;
        params: any;
    }];
    node?: StoryChoiceJSON[];
}

export interface StoryChoiceJSON {
    inputName: string;
    params?: any;
    next?: StoryNodeJSON;
    tp?: boolean;
    path?: string;
};

export class Story {
    public _id?: string;
    public name: string;
    public startPoint: StoryNode;

    constructor(story: StoryJSON) {
        this._id = story._id;
        this.name = story.name;
        this.startPoint = new StoryNode(story.startPoint || {});
    }
}

export class StoryNode {
    public hasScript: boolean;
    public waitTime?: number;
    public output: {
        outputName: string;
        params: any;
    }[];
    public node: StoryChoice[];

    constructor(node: StoryNodeJSON) {
        this.hasScript = node.hasScript || true;
        this.waitTime = node.waitTime;
        this.output = node.output || [];

        const nextNodes = node.node || [];
        this.node = nextNodes.map(choice => new StoryChoice(choice))
    }
}

export class StoryChoice {
    public inputName: string;
    public params?: any;
    public next?: StoryNode;
    public tp: boolean;
    public path?: string;

    constructor(choice: StoryChoiceJSON) {
        this.inputName = choice.inputName;
        this.params = choice.params;
        this.tp = choice.tp || false;
        this.path = choice.path;

        if (choice.next)
            this.next = new StoryNode(choice.next);
    }
}