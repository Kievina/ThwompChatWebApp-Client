import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  selectedFile: File

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
  constructor(private http: HttpClient) { }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/uploadFile', uploadData)
      .subscribe(event => {
        console.log(event); 
      });
  }  
}
