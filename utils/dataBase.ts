import { MongoClient } from "https://deno.land/x/mongo@v0.20.0/mod.ts";

/** Class representing a connection to a DB */
class DB {
    public client: MongoClient;

    /**
     * Create a DB Object
     * @param dbName - name of the DB to connect to
     * @param url - Url of MongoDb
     */
    constructor(public dbName: string, public url: string) {
        this.dbName = dbName;
        this.url = url;
        this.client = {} as MongoClient;
    }

    /**
     * Start the connection to the DB
     */
    connect() {
        const client = new MongoClient();
        client.connect(this.url);
        console.log(`Connected to database ${this.dbName} at url: ${this.url}`);
        this.client = client;
    }

    /**
     * Get this db object
     */
    get getDatabase() {
        return this.client.database(this.dbName);
    }
}

/**
 * Create DB Object with env variable
 * Should be called only one time
 */
export const init = () => {

    if (Deno.env.get('DB_NAME') == undefined)
        throw new Error("'DB_NAME' not found in env");

    if (Deno.env.get('DB_HOST_URL') == undefined)
        throw new Error("'DB_HOST_URL' not found in env");

    const dbName = Deno.env.get('DB_NAME') || '';
    const dbHostUrl = Deno.env.get('DB_HOST_URL') || '';
    db = new DB(dbName, dbHostUrl);
    db.connect();
}

/**
 * DB Object
 */
export var db:DB;
