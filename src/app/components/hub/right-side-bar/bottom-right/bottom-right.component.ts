import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.css']
})

export class BottomRightComponent implements OnInit {

  currentUser:User = this.userService.getCurrentUser();
  constructor(private userService: UserService, private fileservice: FileService) {  }

  ngOnInit() {
  }
  changePic(event){
    this.fileservice.onFileChanged(event);
    this.fileservice.onUpload();
  }
}
