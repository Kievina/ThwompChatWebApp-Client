import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';
import { Option } from 'src/app/models/option.model';
import { ChatService } from 'src/app/services/chat.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})

export class CreatePollComponent implements OnInit {
  pollQuestionInput: string;
  optionInput: string;
  optionNamesList: string[] = [];

  constructor(
    private pollService: PollService,
    private chatService: ChatService) { }

  ngOnInit() {
  }
  addPollQuestion() {
    this.pollQuestionInput = `${this.pollQuestionInput}`;
    console.log('poll question saved to variable');
    console.log(this.pollQuestionInput);
  }
  addOptionNameToList() {
    this.optionNamesList.push(`${this.optionInput}`)
    console.log('optionInput saved to a list');
    console.log(this.optionNamesList);
  }
  // createOptionsList() {
  //   this.optionNamesList.forEach(function (name: string) {
  //     const option = { optionName: name };
  //     this.optionsList.push(option);
  //   });
  // }
  convertToPoll() {
    let optionsList = [];
    // let optionsList: string = "{" + "pollQuestion" + ":" + this.pollQuestionInput + "," + "options" + ":[";
    const listLength = this.optionNamesList.length;
    // for (let i = 0; i < listLength -1; i++) {
    //   optionsList += "{" +"optionName" +":"+ this.optionNamesList[i] + "},"
    // };
    // optionsList += "{" + "optionName" + ":" + this.optionNamesList[listLength-1] + "}]}"
    // return optionsList;
    for (let i = 0; i < listLength; i++) {
      const optionObj = {optionName: this.optionNamesList[i]}
      optionsList.push(optionObj);
    };
    const poll = { pollQuestion: this.pollQuestionInput, options: optionsList };
    return poll;
  }

  submitNewPoll() {
    this.addPollQuestion();
    this.addOptionNameToList();
    const pollJSON =  JSON.stringify(this.convertToPoll());
    this.pollService.createPoll(pollJSON, this.chatService.getCurrentChat().chatId);
    console.log(pollJSON);
  }

}
