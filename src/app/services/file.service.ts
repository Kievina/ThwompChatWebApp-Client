import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileObj } from '../models/file.model'
import { UserService } from '../services/user.service'
@Injectable({
  providedIn: 'root'
})
export class FileService {

  selectedFile: File
  uploadUrl: string = `http://${window.location.hostname}:8080/uploadFile`;
  responseFile: FileObj;

  
  constructor(private http: HttpClient,
    private userService: UserService) { }

  
    onFileChanged(event) {
      this.selectedFile = event.target.files[0]
    }

  onUpload(){
    let fd = new FormData();
    fd.append('file', this.selectedFile);
    this.http.post(this.uploadUrl, fd).subscribe( (response: Response) => {
      console.log(response)
      this.updatePhoto();
      console.log(this.userService.getCurrentUser());
    });

  }
  updatePhoto(){
    this.userService.updateCurrentUserProfilePic(`http://${window.location.hostname}:8080/downloadFile/` + this.selectedFile.name);

    const user = this.userService.getCurrentUser();
    this.http.patch(`http://${window.location.hostname}:8080/user/` + user.userId, user).subscribe(Response => {
      console.log(Response);
    });
  }
}
