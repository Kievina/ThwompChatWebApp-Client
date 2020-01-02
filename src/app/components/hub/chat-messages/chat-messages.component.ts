import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { ChatService } from '../../../services/chat.service';
import { UserService } from '../../../services/user.service';
import { Message } from '../../../models/message.model';
import { Chat } from '../../../models/chat.model';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {
  private messages: Message[];
  messageInput;
  chatName;

  constructor(private messageService: MessageService,
              private chatService: ChatService,
              private userService: UserService) {
    chatService.getCurrentChatObservable().subscribe((chat: Chat) => {
      if (chat != null) {
        this.chatName = chat.chatName;
        messageService.getAllMessages(chat.chatId).subscribe((messages: Message[]) => {
          this.messages = messages;
        });
        messageService.getMessageObserver().subscribe(message => {
          console.log(message);
          this.messages.push(message);
          console.log(this.messages);
        });
      }
    });
  }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.sendMessage(this.userService.getCurrentUser().userId, 1, this.messageInput).subscribe(response =>
      console.log(response)
    );
    this.messageInput = '';
  }
}
