import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthServerProvider } from "../core/auth/auth-jwt.service";
import { Login } from "./login.model";
@Injectable({
  providedIn: "root",
})
export class LoginService {

  constructor(private authServerProvider: AuthServerProvider) {}

  login(credentials: Login): Observable<any> {
    return this.authServerProvider.login({username: 'admin', password: 'admin', rememberMe: false});
  }

  logout(): void {
    console.error('User has already log out');
  }
}
