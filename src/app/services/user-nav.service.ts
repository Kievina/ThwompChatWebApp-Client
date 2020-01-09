import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNavService {

  private selection: BehaviorSubject<string>;

  constructor() {
    this.selection = new BehaviorSubject<string>('Profile');
  }

  public updateSelection(next: string) {
    this.selection.next(next);
  }

  public observeSelection() {
    return this.selection.asObservable();
  }
}
