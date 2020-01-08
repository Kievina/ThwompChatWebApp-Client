import { Injectable } from '@angular/core';
import { Poll } from '../models/poll.model';
import { Option } from '../models/option.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  public poll: Poll;
  public option: Option;
  constructor() { }

  addQuestion(pollQuestionInput: string) {
    let poll = { pollQuestion: pollQuestionInput };
    console.log(poll);
  }

  addOption(optionInput: string) {
    let option = { optionName: optionInput }
    let poll = { options: [option] };
    console.log(poll);
  }
}
