import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {BehaviorSubject, of} from 'rxjs';
import {Chat} from '../models/chat.model';
import {UserService} from './user.service';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private currentChat: BehaviorSubject<Chat>;

  constructor(private http: HttpClient, private userService: UserService) {
    this.currentChat = new BehaviorSubject<Chat>(null);
  }

  getCurrentChat() {
    return this.currentChat.value;
  }

  getCurrentChatObservable() {
    return this.currentChat.asObservable();
  }

  updateCurrentChat(chat: Chat) {
    this.currentChat.next(chat);
  }

  getChatsOfCurrentUser() {
    const currentUser: User = this.userService.getCurrentUser();
    return this.http.get(`http://${window.location.hostname}:8080/chat/user/${currentUser.userId}`)
        .pipe(
            catchError(error => {
              console.log('Oh No, mi pipe');
              return of(); })
        );
  }

  createChat(chat, adminId) {
    return this.http.post(`http://${window.location.hostname}:8080/chat/${adminId}`, chat)
        .pipe(
            catchError(error => {
              console.log('Error creating chat');
              return of(); })
        );
  }

  addUserToChat(chatId, username) {
    return this.http.put(`http://${window.location.hostname}:8080/chat/${chatId}/user/${username}`, null)
        .pipe(
            catchError(error => {
              console.log('Error adding user chat');
              return of(); })
        );
  }
}
