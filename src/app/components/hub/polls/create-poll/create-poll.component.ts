import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  optionInput: string;
  pollQuestion: string;
  displayNewPoll = false;
  displayNewOption = false;

  constructor(pollService: PollService) { }

  ngOnInit() {
  }

  newPollQuestionSubmit() {
    const displayQuestion = `Poll question is ${this.pollQuestion}`;
    alert(displayQuestion);
    console.log('new poll question created');
  }

  newOptionSubmit() {
    const displayNewOption =`Option input is ${this.optionInput}`;
    alert(this.displayNewOption);
    console.log('new poll option created');
  }

}
