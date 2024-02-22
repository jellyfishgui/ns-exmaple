import { Component } from '@angular/core';
import { LoginService } from '~/app/login/login.service';

@Component({
  moduleId: module.id,
  selector: 'ns-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}

  login(): void {
    console.error('This is login click');
    this.loginService.login2();
  }
}
