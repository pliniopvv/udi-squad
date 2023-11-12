import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LoginComponent, CadastrarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class LogoffModule { }
