import sharp from 'sharp';
import { IFile } from '../upload/interfaces/custom-file';

export class ImageOptimizer {
  async optimize(file: IFile): Promise<Buffer> {
    return sharp(file.buffer).resize(1280, 720, {
      fit: 'inside',
      withoutEnlargement: true,
    })
      .toFormat('jpeg', { progressive: true, quality: 60 })
      .toBuffer();
  }
}