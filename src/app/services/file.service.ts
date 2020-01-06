import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileObj } from '../models/file.model'
import { UserService } from '../services/user.service'
@Injectable({
  providedIn: 'root'
})
export class FileService {

  selectedFile: File
  uploadUrl: string = 'http://localhost:8080/uploadFile';
  responseFile: FileObj;

  
  constructor(private http: HttpClient,
    private userService: UserService) { }

  
    onFileChanged(event) {
      this.selectedFile = event.target.files[0]
    }

  onUpload(){
    let fd = new FormData();
    fd.append('file', this.selectedFile);
    this.http.post(this.uploadUrl, fd).subscribe( (response:Response) => {
      console.log(response)
      this.updatePhoto();
      console.log(this.userService.getCurrentUser());
    });

  }
  updatePhoto(){
    
    this.http.patch('http://localhost:8080/user/'+ this.userService.getCurrentUser().userId, this.userService.getCurrentUser()).subscribe(Response => {
      console.log(Response)
      this.userService.updateCurrentUserProfilePic('http://localhost:8080/downloadFile/' + this.selectedFile.name);
    });
  }


}
