import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Message } from '../models/message.model';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private serverUrl = 'http://localhost:8080/ws';
  private stompClient;
  private socketObserver = new Subject<Message>();

  constructor(private http: HttpClient) {
    this.connectToWebSocket();
  }

  connectToWebSocket() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.Stomp.over(ws);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/public', (response) => {
        if ( response.body ) {
          this.socketObserver.next(JSON.parse(response.body));
        }
      });
    });
  }

  getAllMessages(chatId) {
    return this.http.get<Message[]>(`http://localhost:8080/chat/${chatId}/messages`);
  }

  getMessageObserver() {
    return this.socketObserver.asObservable();
  }

  sendMessage(userId, chatId, message) {
    const theMessage = {
      messageBody: message
    };
    return this.http.post(`http://localhost:8080/user/${userId}/chat/${chatId}/message`, theMessage).pipe(
      map(response => {
        this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(response));
      })
    );
  }
}
