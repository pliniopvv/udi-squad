import { User } from 'src/app/model/user';
import { Injectable } from '@angular/core';
import { UserComplements } from '../model/user-complements';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserComplementsService {

  constructor(private http: HttpClient) { }

  public id: number = 0;
  public username: string = "";
  public password?: string;
  public complements?: UserComplements;

  find(): Promise<User> {
    return new Promise((res,rej) => {
      res({
        id: 1,
        username: "gangss2@hotmail.com",
        complements: {
          foto_perfil: { id:1, arquivo: "./assets/notfound_perfil.jpg" },
          nome: "Juvenal McDonald"
        }
      });
    });
  }

}
