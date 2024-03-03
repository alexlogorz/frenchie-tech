import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidenavComponent } from '../dashboard/sidenav/sidenav.component';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private sharedService: SharedService) {}

  toolbarClickEvent() {
    this.sharedService.emitToolbarClickEvent(true)
  }

}
