import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  selectedFile: File
  uploadUrl: string = 'http://localhost:8080/uploadFile';

  
  constructor(private http: HttpClient) { }

  
    onFileChanged(event) {
      this.selectedFile = event.target.files[0]
    }

  onUpload(){
    var fd = new FormData();
        fd.append('file', this.selectedFile);
        this.http.post(this.uploadUrl, fd).subscribe(event => {
          console.log(event);
        })
        
    // this.http.post('http://localhost:8080/uploadFile', this.selectedFile)
    // .subscribe(event => {
    //     console.log(event); 
    //   });
      }
 


}
