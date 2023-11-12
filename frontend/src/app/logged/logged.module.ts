import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { LoggedComponent } from './logged.component';


@NgModule({
  declarations: [
    PerfilComponent,
    LoggedComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
