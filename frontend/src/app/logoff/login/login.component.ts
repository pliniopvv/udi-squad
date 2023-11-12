import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  senha = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  logar() {
    console.log("##### Logando ####");
  }

}
