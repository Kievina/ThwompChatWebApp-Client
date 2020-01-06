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
  private userChats: BehaviorSubject<Chat[]>;

  constructor(private http: HttpClient, private userService: UserService) {
    this.currentChat = new BehaviorSubject<Chat>(null);
    this.userChats = new BehaviorSubject<Chat[]>(null);

    userService.getCurrentUserObservable().subscribe((user: User) => {
        this.loadChatsOfCurrentUser().subscribe((chats: Chat[]) => {
            this.currentChat.next(chats[0]);
            this.userChats.next(chats);
        });
    });
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

  getUserChats() {
      return this.userChats.value;
  }

  getUserChatsObservable() {
      return this.userChats.asObservable();
  }

  private loadChatsOfCurrentUser() {
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
            map((result: Chat) => {
                this.userChats.value.push(result);
                return result;
            }),
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
