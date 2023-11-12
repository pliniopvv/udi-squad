import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string | null | undefined;

  private API_LOGIN = `${environment.API}auth/login`;
  private API_NEW = `${environment.API}auth/cadastrar`;
  private API_ME = `${environment.API}auth/me`;

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

  isLogged() {
    if (this.getToken() != null)
      return true;
    else
      return false;
  }

  async login(login: string, password: string) {
    let post_data = { username: login, password };
    try {
      let ret = await this.http.post<any>(this.API_LOGIN, post_data).toPromise();

      if (ret)
        if (ret.access_token)
          this.setToken(ret.access_token);

      return true;
    } catch (error) {
      console.log('ERRO', error);
      return false;
    }
  }

  async me() {
    let ret = await this.http.get<User>(this.API_ME).toPromise();
    return ret;
  }

  logout() {
    window.localStorage.clear();
  }

}
