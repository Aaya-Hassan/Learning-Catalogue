import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PlyrModule } from 'ngx-plyr';
import { SidebarLeftToggleDirective } from './program-details/program-details.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProgramDetailsComponent,
    SidebarLeftToggleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlyrModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
