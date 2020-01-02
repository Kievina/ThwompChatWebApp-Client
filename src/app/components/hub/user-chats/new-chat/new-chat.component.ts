import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {

  private newUserNamesList: string[] = [];
  private chatNameInput;
  private chatUsersInput;

  constructor() {
  }

  ngOnInit() {
  }

  addUser() {
    this.newUserNamesList.push(this.chatUsersInput);
    this.chatUsersInput = '';
  }

  newChatSubmit() {
    console.log('make new chat');
  }

}
