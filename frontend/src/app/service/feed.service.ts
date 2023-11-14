import { Injectable } from '@angular/core';
import { Feedcard } from '../model/feedcard';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  private URL_API: string = `${environment.API}api/feedcard/`;

  find(id: number): Promise<Feedcard> {
      return this.http.get<Feedcard>(`${this.URL_API}${id}`).toPromise();
  }
  findAll(): Promise<Feedcard[]> {
      return this.http.get<Feedcard[]>(this.URL_API).toPromise();
  }
  create(feedCard: Feedcard) {
     return this.http.post<Feedcard>(this.URL_API, feedCard).toPromise();
  }
  update(id: number, feedcard: Feedcard) {
     return this.http.patch<Feedcard>(`${this.URL_API}${id}`, feedcard).toPromise();
  }
  remove(id: number) {
     return this.http.delete<Feedcard>(`${this.URL_API}${id}`).toPromise();
  }

  MockData(): Promise<Feedcard[]> {
    return new Promise((res,rej) => {
      res([
        {
          id: 1,
          body: "Este é o corpo do card!",
          user: {
            id: 1,
            username: "gangss2@hotmail.com",
            complements: {
              nome: "Juvenal McDonald",
              foto_perfil: {
                id:1,
                arquivo: "./assets/notfound_perfil.jpg"
                }
          }
        },
        created_at: new Date()
        },
        {
          id: 2,
          body: "Este é o corpo do card!",
          user: {
            id: 1,
            username: "gangss2@hotmail.com",
            complements: {
              nome: "Juvenal McDonald",
              foto_perfil: {
                id:1,
                arquivo: "./assets/notfound_perfil.jpg"
                }
          }
        },
        created_at: new Date()
        },
        {
          id: 3,
          body: "Este é o corpo do card!",
          user: {
            id: 1,
            username: "gangss2@hotmail.com",
            complements: {
              nome: "Juvenal McDonald",
              foto_perfil: {
                id:1,
                arquivo: "./assets/notfound_perfil.jpg"
                }
          }
        },
        created_at: new Date()
        },
        {
          id: 4,
          body: "Este é o corpo do card!",
          user: {
            id: 1,
            username: "gangss2@hotmail.com",
            complements: {
              nome: "Juvenal McDonald",
              foto_perfil: {
                id:1,
                arquivo: "./assets/notfound_perfil.jpg"
                }
          }
        },
        created_at: new Date()
        },
        {
          id: 5,
          body: "Este é o corpo do card!",
          user: {
            id: 1,
            username: "gangss2@hotmail.com",
            complements: {
              nome: "Juvenal McDonald",
              foto_perfil: {
                id:1,
                arquivo: "./assets/notfound_perfil.jpg"
                }
          }
        },
        created_at: new Date()
        },
        {
          id: 6,
          body: "Este é o corpo do card!",
          user: {
            id: 1,
            username: "gangss2@hotmail.com",
            complements: {
              nome: "Juvenal McDonald",
              foto_perfil: {
                id:1,
                arquivo: "./assets/notfound_perfil.jpg"
                }
          }
        },
        created_at: new Date()
        }
      ]);
    })
  }

}
