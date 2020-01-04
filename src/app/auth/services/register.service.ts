import { Injectable } from '@angular/core';
import { Register } from '../register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url: string = "http://localhost:8080";


  constructor(private http: HttpClient) { }

  registerUser(newUser : Register){
    return this.http.post<Register>(this.url + "/register", newUser);
  }
}