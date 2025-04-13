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

  constructor(private fb: FormBuilder, private routes: Router, private sharedService :SharedServiceService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['student', Validators.required]
    });
  }

  onSubmit() {
    const formValues = this.loginForm.value;
    const user = new User(
      formValues.username,
      formValues.password,
      formValues.role
    );
    this.sharedService.login(user).subscribe((data: any) => {
      console.log(data);
    });
    if (user.role === 'admin') {
      this.routes.navigate(['/admin-dashboard']);
    } else if (user.role === 'student') {
      this.routes.navigate(['/student-dashboard']);
    } else if (user.role === 'teacher') {
      this.routes.navigate(['/teacher-dashboard']);
    } else {
      this.routes.navigate(['']);
    }
  }

}