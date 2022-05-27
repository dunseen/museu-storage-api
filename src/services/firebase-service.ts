import { FirebaseUploader } from "../upload/adapters/firebase"
import { IFile } from "../upload/interfaces/custom-file"
class FirebaseService {
    constructor(
        private readonly firebase = new FirebaseUploader()
    ) { }

    async execute(files: IFile[], project: string, folder: string) {
        return await Promise.all(files.map((file) => this.multipleUpload(file, project, folder)))
    }

    async multipleUpload(file: IFile, project: string, folder: string) {
        return await this.firebase.upload(file, project, folder)
    }

    async delete(fileName: string, project: string, folder: string) {
        const url = `${project}/${folder}/${fileName}`

        return await this.firebase.delete(url);
    }
}

export default new FirebaseService()