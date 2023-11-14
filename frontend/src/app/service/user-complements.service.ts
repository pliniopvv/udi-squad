import { User } from 'src/app/model/user';
import { Injectable } from '@angular/core';
import { UserComplements } from '../model/user-complements';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserComplementsService {

  constructor(private http: HttpClient) { }

  public id: number = 0;
  public username: string = "";
  public password?: string;
  public complements?: UserComplements;

  private URL_API: string = `${environment.API}api/user-complements`;

  find(id: number): Promise<UserComplements> {
      return this.http.get<UserComplements>(`${this.URL_API}/${id}`).toPromise();
  }
  findAll(): Promise<UserComplements[]> {
      return this.http.get<UserComplements[]>(this.URL_API).toPromise();
  }
  create(userComplements: UserComplements) {
     return this.http.post<UserComplements>(this.URL_API, userComplements).toPromise();
  }
  update(id: number, UserComplements: UserComplements) {
     return this.http.patch<UserComplements>(`${this.URL_API}/${id}`, UserComplements).toPromise();
  }
  remove(id: number) {
     return this.http.delete<UserComplements>(`${this.URL_API}/${id}`).toPromise();
  }

  mockData(): Promise<User> {
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
