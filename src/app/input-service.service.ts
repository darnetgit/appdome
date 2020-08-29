import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputServiceService {
  private userInputsubject = new Subject<any>();

  constructor() { }

  sendInput(userInput) {
    this.userInputsubject.next(userInput);
  }
  reciveInput(): Observable<any> {
    return this.userInputsubject.asObservable();
  }
}