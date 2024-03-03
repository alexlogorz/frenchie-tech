import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private eventSubject = new Subject<boolean>();

  // For listening to events emitted by the subject
  toolbarEventListener$ = this.eventSubject.asObservable();

  // For emmitting events from the subjec.
  emitToolbarClickEvent(toggled: boolean) {
    this.eventSubject.next(!toggled);
  }

  constructor() { }


}
