import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string | null | undefined;

  private API_LOGIN = `auth/login`;
  private API_NEW = `auth/new`;
  private API_ME = `busca/me`;

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post<any>(this.API_NEW, user).toPromise();
  }

  setToken(token: string) {
    this.token = token;
    window.localStorage.setItem('token', this.token);
  }

  getToken() {
    if (!this.token && window.localStorage.getItem('token'))
      this.token = window.localStorage.getItem('token');
    return this.token;
  }

  async login(login: string, password: string) {
    let post_data = { login, password };
    try {
      let ret = await this.http.post<any>(this.API_LOGIN, post_data).toPromise();

      if (ret)
        if (ret.token)
          this.setToken(ret.token);

      return true;
    } catch (error) {
      console.log('ERRO', error);
      return false;
    }
  }

  me() {
    let ret = this.http.get<any>(this.API_ME).toPromise();
    return ret;
  }

  logout() {
    window.localStorage.clear();
  }

}
