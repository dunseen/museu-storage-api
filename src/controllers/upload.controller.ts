import { Request, Response } from "express";

import firebaseService from "../services/firebase-service";

import { IFile } from "../upload/interfaces/custom-file";

class UploadController {
  async store(req: Request, res: Response) {
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

  async delete(req: Request, res: Response) {
    const { project, folder, fileName } = req.body;


    try {
      await firebaseService.delete(fileName, project, folder);

      return res.status(204).send();

    } catch (error) {
      return res.status(500).json(error)

    }
  }


}

export default new UploadController();