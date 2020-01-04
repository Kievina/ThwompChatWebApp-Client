import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../credentials';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm;

  credentials: Credentials = new Credentials('', '');

  constructor(private authService: AuthService) { }


  ngOnInit() {
  }

  public login(): void {
    this.authService.login(this.credentials);
  }
}