import { Component, OnInit } from '@angular/core';
import { Register } from '../../register';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import {UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: Register = new Register();
  
  constructor(private registerService: RegisterService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  registerForm(registerData){
    this.userService.registerUser(registerData).subscribe(response => {
      console.log(response);
      this.router.navigate(['login']);
    }, error => console.log('Oh No!'));
  }

}
