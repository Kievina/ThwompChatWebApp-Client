import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user.model';
import {UserNavService} from '../../../services/user-nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User = this.userService.getCurrentUser();
  constructor(private userService: UserService, private router: Router, private userNavService: UserNavService) { }

  ngOnInit() { }

  logoutCLick() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  userNavClick(selection: string) {
    this.userNavService.updateSelection(selection);
  }

}
