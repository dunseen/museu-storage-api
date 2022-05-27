import { Bucket } from '@google-cloud/storage';
import admin, { ServiceAccount } from 'firebase-admin';
import { customAlphabet, urlAlphabet } from 'nanoid'

import { client_email, private_key, project_id } from '../../env/firebase';

import { ImageUploader } from "../interfaces/image-uploader";
import { UploadDto } from './upload-dto';


export class FirebaseUploader implements ImageUploader {

  private client: admin.app.App;
  private bucket: Bucket;

  constructor() {
    this.client = admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: client_email,
        privateKey: private_key,
        projectId: project_id
      }),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    }),
      this.bucket = this.client.storage().bucket()
  }

  async upload(multerFile: Express.Multer.File, project: string, folder: string): Promise<UploadDto> {

    const nanoid = customAlphabet(urlAlphabet, 13);

    const fileName = `${nanoid()}-${multerFile.originalname}`;

    const path = `${project}/${folder}/${fileName}`

    const file = this.bucket.file(path);

    const stream = file.createWriteStream({
      metadata: {
        contentType: multerFile.mimetype
      }
    });


    stream.on('error', (error) => {
      console.error(error);

      return error
    });

    stream.on('finish', async () => {
      await file.makePublic();

    })

    stream.end(multerFile.buffer)

    return new UploadDto({
      id: fileName,
      url: `https://storage.googleapis.com/${process.env.FIREBASE_STORAGE_BUCKET}/${path}`,
    })


  }
}

