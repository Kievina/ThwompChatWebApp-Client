import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../app/models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-logged-in-container',
  templateUrl: './logged-in-container.component.html',
  styleUrls: ['./logged-in-container.component.css']
})
export class LoggedInContainerComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService, 
    private authenticate: AuthenticationService
    ) { }

  ngOnInit() {
    this.userService.getUser(this.authenticate.getUser()).subscribe(e => this.user = e);
    this.userService.getUserId(this.authenticate.getUser()).subscribe();
  }
  

}