import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Chat } from '../../../models/chat.model';

@Component({
  selector: 'app-user-chats',
  templateUrl: './user-chats.component.html',
  styleUrls: ['./user-chats.component.css']
})
export class UserChatsComponent implements OnInit {
  private chats: Chat[];
  private displayNewChat = false;

  constructor(private chatService: ChatService) {
    chatService.getChatsOfCurrentUser().subscribe( (response: Chat[]) => {
      this.chats = response;
      chatService.updateCurrentChat(this.chats[0]);

      console.log(this.chats);
    });
  }

  ngOnInit() {
  }

  newChat() {

  }

}
