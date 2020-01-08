import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {ChatService} from '../../../../services/chat.service';
import {Chat} from '../../../../models/chat.model';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {

  displayNewChat = false;
  newUserNamesList: string[] = [];
  chatNameInput;
  chatUsersInput;

  constructor(private chatService: ChatService, private userService: UserService) {
  }

  ngOnInit() {
  }

  addUser() {
    this.userService.userExists(this.chatUsersInput).subscribe(exists => {
      if (exists && this.chatUsersInput !== this.userService.getCurrentUser().userName
          && this.newUserNamesList.indexOf(this.chatUsersInput) < 0) {
        this.newUserNamesList.push(this.chatUsersInput);
        this.chatUsersInput = '';
      } else {
        this.chatUsersInput = 'nope';
      }
    });
  }

  newChatSubmit() {
    if (this.chatNameInput !== null) {
      const userNames = this.newUserNamesList;
      const chat = { chatName: this.chatNameInput };
      this.chatService.createChat(chat, this.userService.getCurrentUser().userId).subscribe((response: Chat) => {
        this.chatService.addUserToChat(response.chatId, this.userService.getCurrentUser().userName).subscribe();
        for (const name of userNames) {
          this.chatService.addUserToChat(response.chatId, name).subscribe();
        }
      });
      console.log('make new chat');
      this.displayNewChat = false;
    }
  }
}
