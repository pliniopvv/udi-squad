import { UserComplementsService } from './../../../service/user-complements.service';
import { UserComplements } from './../../../model/user-complements';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  @Input('user')
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
