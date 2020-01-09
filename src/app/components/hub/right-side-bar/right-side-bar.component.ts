import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user.model';
import { FileService } from 'src/app/services/file.service';
@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent implements OnInit {
  displayNewPoll = false;
  currentUser:User = this.userService.getCurrentUser();
  constructor(private userService: UserService, private fileservice: FileService) {  }

  ngOnInit() {
  }

  changePic(event){
    this.fileservice.onFileChanged(event);
    this.fileservice.onUpload();
    
  
  }
}
