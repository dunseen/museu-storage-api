export class UploadDto {
    id: string
    url: string;

    constructor({ id, url }: UploadDto) {
        this.id = id;
        this.url = url
    }

}