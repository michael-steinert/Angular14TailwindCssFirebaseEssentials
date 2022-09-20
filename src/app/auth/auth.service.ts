import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm } from '../interfaces/LoginForm';
import { RegisterForm } from '../interfaces/RegisterForm';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoginLoading: boolean = false;
  isRegisterLoading: boolean = false;

  constructor(private router: Router) {}

  register(registerForm: RegisterForm): void {
    if (this.isRegisterLoading) {
      return;
    }
    this.isRegisterLoading = true;
    if (registerForm.password != registerForm.confirmPassword) {
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      registerForm.email,
      registerForm.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => (this.isRegisterLoading = false));
  }

  login(loginForm: LoginForm): void {
    if (this.isLoginLoading) {
      return;
    }
    this.isLoginLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isAuthenticated = true;
        // Navigate to Base URL
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials does not match');
      })
      .finally(() => (this.isLoginLoading = false));
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful
        this.isAuthenticated = false;
        // Navigate to Login URL
        this.router.navigate(['login']);
      })
      .catch((error) => {});
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
