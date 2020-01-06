import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Login } from '../../models/login';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticate: AuthenticationService
    ) { }

  ngOnInit() {
  }
  loginForm(){
    this.authenticate.authenticate(this.login.username, this.login.password)
                    .subscribe( result => this.router.navigate(['hub'])); 
    // console.log(this.login.username + "  " + this.login.password)
  }

  

}