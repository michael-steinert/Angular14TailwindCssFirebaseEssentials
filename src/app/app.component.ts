import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/firebase.config';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular14FirebaseEssentials';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    /* Initialize Firebase */
    initializeApp(firebaseConfig);
  }

  onSingOut(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }
}
