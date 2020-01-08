import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})

export class CreatePollComponent implements OnInit {
  displayNewPoll = false;
  displayNewOption = false;
  pollQuestionInput: string;
  optionInput: any;

  constructor(private pollService: PollService) { }

  ngOnInit() {
  }

  addPollQuestionToPoll() {
    this.pollService.addQuestion(`${this.pollQuestionInput}`);
  }

  addOptionToPoll() {
    this.pollService.addOption(`${this.optionInput}`);
  }

  submitNewPoll () {
    console.log('logic need to be written');
    // if (this.pollQuestionInput !== null) {
      //     const options = this.optionsList;
      //     const poll = { p: this.pollQuestionInput };
      //     this.chatService.createChat(chat, this.userService.getCurrentUser().userId).subscribe((response: Chat) => {
      //       this.chatService.addUserToChat(response.chatId, this.userService.getCurrentUser().userName).subscribe();
      //       for (const name of userNames) {
      //         this.chatService.addUserToChat(response.chatId, name).subscribe();
      //       }
      //     });
      //     console.log('make new chat');
      //   }
      // }
  }

  addOption() {
   console.log('logic need to be written')
      //   this.pollService.userExists(this.optionInput).subscribe(exists => {
      //     if (exists && this.chatUsersInput !== this.userService.getCurrentUser().userName
      //         && this.newUserNamesList.indexOf(this.chatUsersInput) < 0) {
      //       this.newUserNamesList.push(this.chatUsersInput);
      //       this.chatUsersInput = '';
      //     } else {
      //       this.chatUsersInput = 'nope';
      //     }
      //   });
      // }
  }

}
