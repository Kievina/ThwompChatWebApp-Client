import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';

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