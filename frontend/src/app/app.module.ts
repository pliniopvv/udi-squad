import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoffModule } from './logoff/logoff.module';
import { HttpClientModule } from '@angular/common/http';
import { LoggedModule } from './logged/logged.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { httpInterceptorProviders } from './auth';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LogoffModule,
    LoggedModule,
    NgbModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
