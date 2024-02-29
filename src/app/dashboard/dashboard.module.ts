import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';



@NgModule({
  declarations: [
    UserprofileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserprofileComponent
  ]
})
export class DashboardModule { }
