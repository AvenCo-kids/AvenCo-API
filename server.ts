/** If WORK_ENV is set to DOWNLOAD then quit */
const download: boolean = Deno.env.get('WORK_ENV') == 'DOWNLOAD';
if (download)
    Deno.exit(0);

/**
 * Reading .env file and export to environment
 * Reading by default .env.defaults
 */
import { config } from "https://deno.land/x/dotenv@v1.0.1/mod.ts";
config({export: true})
import { Application } from "https://deno.land/x/abc@v1.2.3/mod.ts";
import { HttpMethod } from "https://deno.land/x/abc@v1.2.3/constants.ts";
import { logger } from "https://deno.land/x/abc@v1.2.3/middleware/logger.ts";
import { DefaultSkipper } from "https://deno.land/x/abc@v1.2.3/middleware/skipper.ts";
import { cors, CORSConfig } from "https://deno.land/x/abc@v1.2.3/middleware/cors.ts";

/**
 * Init WebApp with logger
 */
const app = new Application();
app.use(logger());

/**
 * Set API CORS settings:
 * Authorize methode get/post/patch/delete/options
 */
const corsConfig: CORSConfig = {
    skipper: DefaultSkipper,
    allowMethods: [
        HttpMethod.Get,
        HttpMethod.Post,
        HttpMethod.Patch,
        HttpMethod.Delete,
        HttpMethod.Options
    ],
    allowHeaders: ['content-type', 'authorization'],
    allowOrigins: ['*'],
}
app.use(cors(corsConfig));

import storyRoutes from './routes/routesStory.ts';
import { ErrorMiddleware } from './utils/middlewares.ts';

app.use(ErrorMiddleware);

const dataPath = Deno.env.get('DATA_PATH') || './data/';
app.static('/story/mp3', dataPath + "mp3");
app.static('/story/script', dataPath + "script");
storyRoutes(app.group('story'));

/**
 * Fall back when trying to access unknown endpoint
 */
app.any('/*', (c) => {
    c.json('Not found', 404);
})

/**
 * Get port from env or default of 3000
 * And start the server on this port
 */
const port = Number(Deno.env.get('PORT') || 3000);
app.start({port});
console.log(`Server listening on http://localhost:${port}`);
