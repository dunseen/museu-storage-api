import 'dotenv/config';
import express from 'express';

import { router } from './routes';
import { SERVER_PORT } from './env/server'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(SERVER_PORT, () => console.log('storage api running at: ' + SERVER_PORT));