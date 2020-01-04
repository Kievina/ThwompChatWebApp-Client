import { Component, OnInit } from '@angular/core';
import { Register } from '../../register';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: Register = new Register();
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  registerForm(){
    this.registerService.registerUser(this.newUser).subscribe(data => this.router.navigate(['/login']));
  }

}
