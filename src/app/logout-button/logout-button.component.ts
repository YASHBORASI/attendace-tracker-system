import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  imports: [],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss'
})
export class LogoutButtonComponent {

  constructor(private router: Router) {}

  logout() {
    localStorage.clear(); // Clear localStorage
    this.router.navigate(['']); // Redirect to login
 
}
}