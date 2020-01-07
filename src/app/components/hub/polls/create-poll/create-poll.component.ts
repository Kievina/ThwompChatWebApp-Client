import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  question: string;
  option: string;
  pollQuestion: string;

  constructor(pollService: PollService) { }

  ngOnInit() {
  }

  newPollSubmit() {
    const displayQuestion = `Poll question is ${this.pollQuestion}`;
    alert(displayQuestion);
    console.log('new poll question created')
  }

}
