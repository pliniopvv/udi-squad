import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/model/alert';
import { Feedcard } from 'src/app/model/feedcard';
import { User } from 'src/app/model/user';
import { UserComplements } from 'src/app/model/user-complements';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-pageeditcomplements',
  templateUrl: './pageeditcomplements.component.html',
  styleUrls: ['./pageeditcomplements.component.scss']
})
export class PageEditComplementsComponent implements OnInit {

  user: User;
  complements: UserComplements;

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.auth.me().then(user => this.user = user);
  }

  updateMe(uC: UserComplements) {
    this.user.complements = uC;
  }

}
