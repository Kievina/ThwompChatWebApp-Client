import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { BehaviorSubject, of} from 'rxjs';
import { Observable } from 'rxjs';

import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: BehaviorSubject<User>;
  private url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {}  
  getUser(username: string) :Observable<any>{
    return this.http.get<any>(this.url + "user/get/" +username);
    } 
  getUserId(username: string): Observable<any>{
    return this.http.get<any>(this.url + "user/get/" + username).pipe(map(
      userData => {
        sessionStorage.setItem('userId', userData.userId);
      }
    ));
  } 
  getCurrentUser() {
    return this.currentUser.value;
  }

  updateUser(user : User){
    return this.http.put<User[]>(this.url + "user/update/" + sessionStorage.getItem('userId'),user);

  }





  getCurrentUserChats() {
    return this.http.get(`this.url + "user/" + ${sessionStorage.getCurrentUser().userId}/chats`)

      .pipe(
        catchError(error => {
          console.log('Oh No, mi pipe');
          return of(); })
      );
  }

  updateCurrentUserProfilePic(filename) {
    let user = this.getCurrentUser();
    user.profilePic = filename;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}

