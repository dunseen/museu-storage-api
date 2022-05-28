export class UploadDto {
    fileName: string
    url: string;

    constructor({ fileName, url }: UploadDto) {
        this.fileName = fileName;
        this.url = url
    }

}