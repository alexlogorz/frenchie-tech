import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;
  private subscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.toolbarEventListener$.subscribe((toolbarClick) => {
      this.sidenav?.toggle();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
