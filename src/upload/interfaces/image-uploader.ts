import { UploadDto } from "../adapters/upload-dto";

export interface ImageUploader {
    upload(file: Express.Multer.File, project?: string, folder?: string): Promise<UploadDto>;
    // delete(url: string): Promise<void>
}