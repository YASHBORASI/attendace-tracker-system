import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private http = inject(HttpClient);
  loginForm: FormGroup;
  dropdownOptions = ['admin', 'student', 'teacher'];
  errorMessage: string = ''; // Added by sagar


  constructor(private fb: FormBuilder, private routes: Router, private sharedService: SharedServiceService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['student', Validators.required]
    });
  }

  onSubmit() {
    this.errorMessage = ''; // Clear previous errors Added by sagar
    const formValues = this.loginForm.value;
    const user = new User(
      formValues.username,
      formValues.password,
      formValues.role
    );
// The below is old Functionality 
    // this.sharedService.login(user).subscribe((data: any) => {
    //   if (data) {
    //     sessionStorage.setItem('authToken', data.token);
    //     if (user.role === 'admin') {
    //       this.routes.navigate(['/admin-dashboard']);
    //     } else if (user.role === 'student') {
    //       this.routes.navigate(['/student-dashboard']);
    //     } else if (user.role === 'teacher') {
    //       this.routes.navigate(['/teacher-dashboard']);
    //     }
    //   } else {
    //     this.routes.navigate(['/Login Page']);
        
    //   }
// The new Functionality

    this.sharedService.login(user).subscribe({
      next: (data: any) => {
        if (data && data.token) {
          sessionStorage.setItem('authToken', data.token);
          if (user.role === 'admin') {
            this.routes.navigate(['/admin-dashboard']);
          } else if (user.role === 'student') {
            this.routes.navigate(['/student-dashboard']);
          } else if (user.role === 'teacher') {
            this.routes.navigate(['/teacher-dashboard']);
          }
        } else {
          this.errorMessage = 'Login failed. Please try again.';
          this.routes.navigate(['/Login Page']);
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.msg || 'Something went wrong during login.';
        if (this.errorMessage.toLowerCase().includes('user not found') || this.errorMessage.toLowerCase().includes('invalid username')) {
          this.loginForm.reset(); // 👈 Clear form only if the username is incorrect
        }
      }
      
      
    });
  }
} // The new Functionality added by sagar
