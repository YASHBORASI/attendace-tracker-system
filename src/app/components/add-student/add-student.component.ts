import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private routes: Router,private sharedService :SharedServiceService) {
    this.studentForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      enrollmentNo: ['', Validators.required],
      mobile: ['', Validators.required],
      course: ['', Validators.required],
      semester: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;
      const teacher = new Student(
        formValue.firstname,
        formValue.lastname,
        formValue.username,
        formValue.password,
        formValue.email,
        formValue.enrollmentNo,
        formValue.mobile,
        formValue.course,
        formValue.semester
      );
      this.sharedService.addUser(teacher).subscribe((data: any) => {
      });
    }
  }
}
