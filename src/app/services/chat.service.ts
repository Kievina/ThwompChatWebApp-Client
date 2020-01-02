import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {BehaviorSubject, of} from 'rxjs';
import {Chat} from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private currentChat: BehaviorSubject<Chat>;

  constructor(private http: HttpClient) {
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
}
