import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alert } from '../model/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private http: HttpClient) { }

  findAll(): Promise<Alert[]> {
    return new Promise((res,rej) => {
      res([
        {
          btnName: "Primeiro",
          body: "Este é o corpo do primeiro alert",
          user: {
            id: 1,
            username: "gangss2@hotmail.com"
          },
          created_at: new Date()
        },
        {
          btnName: "Segundo",
          body: "Este é o corpo do segundo alert",
          user: {
            id: 1,
            username: "gangss2@hotmail.com"
          },
          created_at: new Date()
        },
        {
          btnName: "Terceiro",
          body: "Este é o corpo do terceiro alert",
          user: {
            id: 1,
            username: "gangss2@hotmail.com"
          },
          created_at: new Date()
        },
        {
          btnName: "aaaaaaa",
          body: "Este é o corpo do aaaaaaa alert",
          user: {
            id: 1,
            username: "gangss2@hotmail.com"
          },
          created_at: new Date()
        },
        {
          btnName: "bbbbbbbb",
          body: "Este é o corpo do bbbbbbbb alert",
          user: {
            id: 1,
            username: "gangss2@hotmail.com"
          },
          created_at: new Date()
        }
      ]);
    })
  }

}
