import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatApp';

  constructor(private router: Router, private authenticate: AuthenticationService) { }

  displayPreLoginHeader() {
    return this.authenticate.isUserLoggedIn();
  }
}
