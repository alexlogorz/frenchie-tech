import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

// Material theme modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    DashboardModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule
  ],
  exports: [],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
