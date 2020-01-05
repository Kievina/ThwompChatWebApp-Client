import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { ChatService } from '../../../services/chat.service';
import { UserService } from '../../../services/user.service';
import { Message } from '../../../models/message.model';
import { Chat } from '../../../models/chat.model';
import { FileService } from '../../../services/file.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router'


@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {
  private messages: Message[];
  messageInput;
  chatName;
  currentUser:User = this.userService.getCurrentUser();
  profilePic = this.currentUser.profilePic;
  
  
  
  
 
  constructor(private messageService: MessageService,
              private chatService: ChatService,
              private userService: UserService,
              private router: Router,
              private fileservice: FileService) {
                
                
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


  changePic(event){
    this.fileservice.onFileChanged(event);
    this.fileservice.onUpload();
    // this.profilePic = this.currentUser.profilePic;
    // this.router.navigate(['hub']);
    console
  
  }

  changeImage() {
    if(this.profilePic === "./assets/nophoto.png"){
    this.profilePic = "./assets/rdXPptYX_400x400.jpg"
    }else{
    this.profilePic =  "./assets/nophoto.png"
    }
    
}
  // displayNewPic() {
  //  this.profilePic = document.getElementById("./assets/nophoto.png");

  // }
}
