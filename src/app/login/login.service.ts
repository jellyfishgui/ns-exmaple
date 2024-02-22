import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthServerProvider } from "../core/auth/auth-jwt.service";
import { Login } from "./login.model";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: "root",
})
export class LoginService {

  constructor(private  http: HttpClient, private authServerProvider: AuthServerProvider) {}

  login(credentials?: Login): Observable<any> {
    console.error('Start to call login')
    return this.authServerProvider.login({username: 'admin', password: 'admin', rememberMe: false});
  }

  login2(): Observable<any> {
    console.error('Request URL: ', `${process.env.MY_API_ENDPOINT}api/authenticate`)
    return this.http.post(`${process.env.MY_API_ENDPOINT}api/authenticate`, {username: 'admin', password: 'admin', rememberMe: false}, {observe: 'response'})
  }

  logout(): void {
    console.error('User has already log out');
  }
}
