import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { ChatService } from '../../../services/chat.service';
import { UserService } from '../../../services/user.service';
import { Message } from '../../../models/message.model';
import { Chat } from '../../../models/chat.model';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {
  private messages: Message[];
  messageInput;
  chatName;
  // currentUser: User = this.userService.getCurrentUser();
  // profilePic = this.currentUser.profilePic;

  constructor(private messageService: MessageService,
              private chatService: ChatService,
              private userService: UserService,
              private router: Router,
            
              ) {
    chatService.getCurrentChatObservable().subscribe((chat: Chat) => {
      if (chat != null) {
        this.chatName = chat.chatName;
        messageService.getAllMessages(chat.chatId).subscribe((messages: Message[]) => {
          this.messages = messages;
          
        });
      }
    });

    messageService.getMessageObserver().subscribe(message => {
      this.messages.push(message);
      console.log(this.messages);
    });
  }

  ngOnInit() { }

  sendMessage() {
    this.messageService.sendMessage(this.userService.getCurrentUser().userId,
        this.chatService.getCurrentChat().chatId,
        this.messageInput).subscribe(response =>
      console.log(response)
    );
    this.messageInput = '';
  }


  // changePic(event) {
  //   this.fileservice.onFileChanged(event);
  //   this.fileservice.onUpload();
  // }
 
}
