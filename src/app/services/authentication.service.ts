import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(public status: string) { }
}

export class JwtResponse {
  constructor(public jwtToken: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    return this.http.post<any>('http://localhost:8080/authenticate', { username, password }).pipe(map(
      userData => {
        sessionStorage.setItem('username', username);
        let tokenStr = 'Bearer ' + userData.jwt;
        sessionStorage.setItem('token', tokenStr);
        return userData;
      }
    ));
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }
  
  getUser(){
    let user: string = sessionStorage.getItem('username');
    return user;
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
  }
}