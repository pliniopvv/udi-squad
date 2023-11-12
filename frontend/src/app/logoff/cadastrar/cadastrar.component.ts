import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  email = new FormControl('');
  senha = new FormControl('');
  senha2 = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
