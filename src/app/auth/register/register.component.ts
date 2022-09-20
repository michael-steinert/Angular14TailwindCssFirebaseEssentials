import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/interfaces/RegisterForm';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submitRegister(): void {
    this.authService.register(this.registerForm);
  }

  isRegisterLoading(): boolean {
    return this.authService.isRegisterLoading;
  }
}
