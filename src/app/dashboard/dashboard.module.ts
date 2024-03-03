import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard.component';

// Material theme modules
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    UserprofileComponent,
    SidenavComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    MatSidenavModule
  ]
})
export class DashboardModule { }
