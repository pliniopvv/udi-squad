import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  email = new FormControl('');
  senha = new FormControl('');
  senha2 = new FormControl('');

  // display erros e informativos reativos:
  loading: boolean = false;
  senhas_diferentes: boolean = false;
  email_invalido: boolean = false;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.senhas_diferentes = false;
    this.email_invalido = false;

    this.loading = true;
    if (this.senha.value != this.senha2.value) {
      this.senhas_diferentes = true;
    }

    // RegEx para e-mails válidos.
    let rx = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

    if (!rx.test(this.email.value)) {
      this.email_invalido = true;
    }

    if (this.senhas_diferentes || this.email_invalido) return;
    // realizar cadastro:
      let user = new User();
      user.username = this.email.value;
      user.password = this.senha.value;
      this.auth.create(user).then(
        userByHost => {
          if (userByHost.id) {
            this.router.navigate(['login']);
            if (this.auth.login(user.username, user.password)) {
              this.router.navigate(['on/perfil']);
            }
          }
        });

    // foot function:
    this.loading = false;
  }
}
