import 'dotenv/config';

import { SERVER_PORT } from './env/server'

import express, { Request, Response } from 'express';
import multer from 'multer';

import firebaseService from './services/firebase-service';

interface IFile extends Express.Multer.File {
  url?: string
}


const app = express();
const Multer = multer({
  storage: multer.memoryStorage(), limits: {
    fileSize: 1024 * 1024
  }
});


app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post(
  "/upload",
  Multer.array("images"),
  async (req: Request, res: Response) => {
    const files = req.files as IFile[];
    const { project, folder } = req.body;

    if (!files?.length) return res.end();

    try {
      const response = await firebaseService.execute(files, project, folder);

      return res.json(response);

    } catch (error) {
      return res.status(500).json(error)

    }
  }
);



app.listen(SERVER_PORT, () => console.log('storage api running at: ' + SERVER_PORT));