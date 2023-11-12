import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  senha = new FormControl('');

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  logar() {
    let user = new User();
    user.username = this.email.value;
    user.password = this.senha.value;
    if (this.auth.login(user.username, user.password)) {
      this.router.navigate(['/perfil']);
    }
  }

}
