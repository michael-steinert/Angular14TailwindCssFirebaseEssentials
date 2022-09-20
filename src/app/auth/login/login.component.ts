import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/LoginForm';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submitLogin(): void {
    this.authService.login(this.loginForm);
  }

  isLoginLoading(): boolean {
    return this.authService.isLoginLoading;
  }
}
