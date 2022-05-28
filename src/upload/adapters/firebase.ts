import { Bucket } from '@google-cloud/storage';
import admin from 'firebase-admin';
import { customAlphabet, urlAlphabet } from 'nanoid'

import { client_email, private_key, project_id, storageBucket } from '../../env/firebase';
import { ImageOptimizer } from '../../services/image-optimizer';

import { ImageUploader } from "../interfaces/file-uploader";
import { UploadDto } from './upload-dto';


export class FirebaseUploader implements ImageUploader {

  private client: admin.app.App;
  private bucket: Bucket;

  constructor(private readonly optimizer = new ImageOptimizer()) {
    this.client = admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: client_email,
        privateKey: private_key?.replace(/\\n/g, '\n'),
        projectId: project_id
      }),
      storageBucket: storageBucket,
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

    const buffer = await this.optimizer.optimize(multerFile)

    stream.end(buffer)

    return new UploadDto({
      fileName,
      url: `https://storage.googleapis.com/${storageBucket}/${path}`,
    })


  }

  async delete(filePath: string): Promise<void> {
    await this.bucket.file(filePath).delete();

    console.log(`${filePath} deleted`);
  }
}

