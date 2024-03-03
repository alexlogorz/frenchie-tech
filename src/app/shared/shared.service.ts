import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private toolbarEventSubject = new Subject<boolean>();

  // For listening to events emitted by the subject
  toolbarEventListener$ = this.toolbarEventSubject.asObservable();

  // For emmitting events from the subjec.
  emitToolbarClickEvent(toggled: boolean) {
    this.toolbarEventSubject.next(!toggled);
  }

  constructor() { }


}
