import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserComplements } from 'src/app/model/user-complements';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserComplementsService } from 'src/app/service/user-complements.service';

@Component({
  selector: 'app-editcomplements',
  templateUrl: './editcomplements.component.html',
  styleUrls: ['./editcomplements.component.scss']
})
export class EditcomplementsComponent implements OnInit {

  user: User;
  @Output()
  onEdited = new EventEmitter();

  nome: FormControl = new FormControl('');

  constructor(
    private auth: AuthenticationService,
    private uComplements: UserComplementsService
    ) { }

  ngOnInit(): void {
    this.auth.me().then(user => {
      this.user = user;
    });
  }

  salvar() {
    let uC = new UserComplements();
    uC.nome = this.nome.value;
    uC.user = {
      id: this.user.id
    }

    if (!this.user.complements) {
      this.uComplements
      .create(uC).then(affected => {
        if (affected)
          this.onEdited.emit(uC);
      })
      .catch(er => {
        console.log(er);
      });
    } else {
      this.uComplements.update(this.user.complements.id, uC).then(affected => {
        uC.id = this.user.complements.id;
        if (affected)
          this.onEdited.emit(uC);
      });
    }

  }

}
