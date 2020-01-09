import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: BehaviorSubject<User>;

  private url: string = "http://localhost:8080/";


  private constructor(private http: HttpClient) {
    this.currentUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    console.log(this.currentUser.value);
  }


  getCurrentUser() {
    return this.currentUser.value;
  }


  getCurrentUserObservable() {
      return this.currentUser.asObservable();
  }

  getPublicContent(): Observable<any> {
    return this.http.get(this.url + 'all', { responseType: 'text' });
  }

  getCurrentUserChats() {
    return this.http.get(`this.url + "user/" + ${sessionStorage.getCurrentUser().userId}/chats`)

      .pipe(
        catchError(error => {
          console.log('Oh No, mi pipe');
          return of();
        })
      );
  }

  userExists(username: string) {
    return this.http.get(`http://${window.location.hostname}:8080/user/${username}/exists`)
      .pipe(catchError(error => {
        console.log('Error checking if user exists');
        return of();
      })
      );
  }

  updateCurrentUserProfilePic(filename) {
    const user = this.getCurrentUser();
    user.profilePic = filename;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  getUserById(id)  {
    let returnedUser;
    this.http.get(`http://localhost:8080/user/${id}`).pipe(
      map((result: User) => {
        
        returnedUser = result; }),
      catchError(error => {
        console.log('Oh No, mi pipe');
        return of(); })
    );
   return returnedUser;
  }


    // getUser(username: string): Observable<any> {
  //   return this.http.get<any>(this.url + "user/get/" + username);
  // }
  // getUserId(username: string): Observable<any> {
  //   return this.http.get<any>(this.url + "user/get/" + username).pipe(map(
  //     userData => {
  //       sessionStorage.setItem('userId', userData.userId);
  //     }
  //   ));
  // }



    // updateUser(user: User) {
  //   return this.http.put<User[]>(this.url + "user/update/" + sessionStorage.getItem('userId'), user);
  // }





    // registerUser(user) {
  //   return this.http.post(`http://${window.location.hostname}:8080/user/`, user)
  //     .pipe(
  //       map((result: User) => {
  //         localStorage.setItem('currentUser', JSON.stringify(result));
  //         this.currentUser.next(result);
  //         return result; }),
  //       catchError(error => {
  //         console.log('Oh No, mi pipe');
  //         return of(); })
  //     );
  // }
}

