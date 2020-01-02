import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router ) {
    this.loginForm = this.formBuilder.group( {
      userName: '',
      password: ''
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.userService.loginUser(this.loginForm.value.userName).subscribe( response => {
      console.log(response);
      this.router.navigate(['hub']);
    }, error => console.log('Oh No!'));
  }

}
