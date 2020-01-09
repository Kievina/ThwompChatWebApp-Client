import { Injectable } from '@angular/core';
import { Poll } from '../models/poll.model';
import { Option } from '../models/option.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  public poll: Poll;
  public option: Option;
  public optionsList: Array<Option>;


  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  createPoll(poll, chatId: number) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    return this.http.post(`http://${window.location.hostname}:8080/chat/${chatId}/polls`, poll, { headers:header})
      .subscribe(response => console.log(response));
  }
}

