import { MongoClient } from "https://deno.land/x/mongo@v0.20.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v1.0.1/mod.ts";
config({export: true})

/** Class representing a connection to a DB */
class DB {
    public client: MongoClient;

    /**
     * Create a DB Object
     * @param {string} dbName - name of the DB to connect to
     * @param {string} url - Url of MongoDb
     */
    constructor(public dbName: string, public url: string) {
        this.dbName = dbName;
        this.url = url;
        this.client = {} as MongoClient;
    }

    /**
     * Start the connection to the DB
     */
    async connect() {
        const client = new MongoClient();
        await client.connect(this.url);
        console.log(`Connected to database ${this.dbName} at url: ${this.url}`);
        this.client = client;
    }

    /**
     * Get this db object
     */
    get getDatabase() {
        try {
            return this.client.database(this.dbName);
        } catch (err) {
            console.log('err :', err);
            throw err;
        }
    }
}

/**
 * Create DB Object with env variable
 * Should be called only one time
 */
const init = async () => {

    if (Deno.env.get('DB_NAME') == undefined)
        throw new Error("'DB_NAME' not found in env");

    if (Deno.env.get('DB_HOST_URL') == undefined)
        throw new Error("'DB_HOST_URL' not found in env");

    const dbName = Deno.env.get('DB_NAME') || '';
    const dbHostUrl = Deno.env.get('DB_HOST_URL') || '';
    db = new DB(dbName, dbHostUrl);
    await db.connect();
}

await init();

/**
 * DB Object
 */
export var db:DB;
