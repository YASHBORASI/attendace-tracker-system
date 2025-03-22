import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  dropdownOptions = ['Admin', 'Student', 'Teacher'];

  constructor(private fb: FormBuilder, private routes: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Student', Validators.required]
    });
  }

  onSubmit() {
    const formValues = this.loginForm.value;
    const user = new User(
      formValues.username,
      formValues.password,
      formValues.role
    );
    if (user.role === 'Admin') {
      this.routes.navigate(['/admin-dashboard']);
    } else if (user.role === 'Student') {
      this.routes.navigate(['/student-dashboard']);
    } else if (user.role === 'Teacher') {
      this.routes.navigate(['/teacher-dashboard']);
    } else {
      this.routes.navigate(['']);
    }
  }

}