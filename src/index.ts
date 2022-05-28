import 'dotenv/config';
import express from 'express';

import { router } from './routes';
import { SERVER_PORT } from './env/server'

const app = express();
const PORT = SERVER_PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(router)
app.get('/', (req, res) => {
    return res.json({
        status: 'its working =)'
    });
})

app.listen(PORT, () => console.log('storage api running at: ' + PORT));