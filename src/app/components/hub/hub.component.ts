import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  private currentUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = userService.getCurrentUser();
    if (this.currentUser == null) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

  logoutCLick() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

}
