
export class FileObj   {
    public fileName: string;
    public fileDownloadUri: string;
    public fileType: string;
    public size: number;
  
  
    constructor(fileName: string, fileDownloadUri: string, fileType: string, size: number) {
      this.fileName = fileName;
      this.fileDownloadUri = fileDownloadUri;
      this.fileType = fileType;
      this.size = size;
    }
  }
  