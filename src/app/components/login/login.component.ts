import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  errorLoggingIn = false;
  errorMessage = '';
  roles: string[] = [];
  username: string;

  constructor(private authService: AuthenticationService, 
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    // this.userService.retrieveUserDTO(this.form.username," token.token").subscribe(response => {
    //   console.log(response);
    // });

    this.authService.authenticate(this.form).subscribe(token => {
        this.tokenStorage.saveToken(token.token);
        this.errorLoggingIn = false;
        this.isLoggedIn = true;
        //this.router.navigate(['hub']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.errorLoggingIn = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}