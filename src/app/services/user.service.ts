import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { BehaviorSubject, of} from 'rxjs';

import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.currentUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    console.log(this.currentUser.value);
  }

  getCurrentUser() {
    return this.currentUser.value;
  }

  registerUser(user) {
    return this.http.post(`http://${window.location.hostname}:8080/user/`, user)
      .pipe(
        map((result: User) => {
          localStorage.setItem('currentUser', JSON.stringify(result));
          this.currentUser.next(result);
          return result; }),
        catchError(error => {
          console.log('Oh No, mi pipe');
          return of(); })
      );
  }

  loginUser(username) {
    return this.http.get(`http://${window.location.hostname}:8080/user/${username}/login`)
      .pipe(
        map((result: User) => {
          localStorage.setItem('currentUser', JSON.stringify(result));
          this.currentUser.next(result);
          return result; }),
        catchError(error => {
          console.log('Oh No, mi pipe');
          return of(); })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser.next(null);
  }

  userExists(username: string) {
      return this.http.get(`http://${window.location.hostname}:8080/user/${username}/exists`)
          .pipe(catchError(error => {
              console.log('Error checking if user exists');
              return of(); })
          );
  }

  updateCurrentUserProfilePic(filename) {
    const user = this.getCurrentUser();
    user.profilePic = filename;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}
