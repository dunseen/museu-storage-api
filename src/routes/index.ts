import { Router } from 'express'

import UploadController from '../controllers/upload.controller'
import { Multer } from '../middlewares/multer';

const router = Router();

router.post('/storage/upload', Multer.array('images'), UploadController.store);
router.post('/storage/delete', UploadController.delete);

export { router }