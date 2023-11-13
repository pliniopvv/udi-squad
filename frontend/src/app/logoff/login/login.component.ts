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

  // display erros e informações
  loading: boolean = false;

  generic_login_error: boolean = false;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  async logar() {
    this.loading = true;
    this.generic_login_error = false;

    let user = new User();
    user.username = this.email.value;
    user.password = this.senha.value;
    let login = await this.auth.login(user.username, user.password);
    if (login) {
      this.router.navigate(['on/perfil']);
    } else {
      this.generic_login_error = true;
    }

    // footer function
    this.loading = false;
  }

}
