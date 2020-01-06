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
  private serverUrl = `http://${window.location.hostname}:8080/ws`;
  private stompClient;
  private socketObserver = new Subject<Message>();

  constructor(private http: HttpClient) {
    this.stompClient = Stomp.Stomp.over(() => {
      return new SockJS(this.serverUrl);
    });

    this.connectToWebSocket(1);
  }

  connectToWebSocket(socketId: number) {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/chat/${socketId}`, (response) => {
        if ( response.body ) {
          this.socketObserver.next(JSON.parse(response.body));
        }
      });
    });
  }

  getAllMessages(chatId) {
    return this.http.get<Message[]>(`http://${window.location.hostname}:8080/chat/${chatId}/messages`);
  }

  getMessageObserver() {
    return this.socketObserver.asObservable();
  }

  sendMessage(userId, chatId, message) {
    const theMessage = {
      messageBody: message
    };
    return this.http.post(`http://${window.location.hostname}:8080/user/${userId}/chat/${chatId}/message`, theMessage).pipe(
      map(response => {
        this.stompClient.send(`/app/chat${chatId}.sendMessage`, {}, JSON.stringify(response));
      })
    );
  }
}
