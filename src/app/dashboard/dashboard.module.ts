import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    UserprofileComponent,
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserprofileComponent,
    SidenavComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
