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
  studentForm!: FormGroup;

  constructor(private fb: FormBuilder, private routes: Router,private sharedService :SharedServiceService) {
  }

 

  
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    if (this.sharedService.add) {
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
    } else {
      this.studentForm = this.fb.group({
        firstname: [this.sharedService.selectedStudent.firstname, Validators.required],
        lastname: [this.sharedService.selectedStudent.lastname, Validators.required],
        username: [this.sharedService.selectedStudent.username, Validators.required],
        password: [this.sharedService.selectedStudent.password, Validators.required],
        email: [this.sharedService.selectedStudent.email, [Validators.required, Validators.email]],
        enrollmentNo: [this.sharedService.selectedStudent.enrollmentNo, Validators.required],
        mobile: [this.sharedService.selectedStudent.mobile, Validators.required],
        course: [this.sharedService.selectedStudent.course, Validators.required],
        semester: [this.sharedService.selectedStudent.semester, Validators.required],
      });
    }
  }
  onSubmit(): void {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;
      const student = new Student(
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
      if (this.sharedService.add) {
        this.sharedService.addUser(student).subscribe((data: any) => {
          this.routes.navigate(['/manage-students']);
        });
      } else {
        this.sharedService.editUser(student,this.sharedService.selectedStudentID).subscribe((data: any) => {
          this.routes.navigate(['/manage-students']);
        });
      }
    }
  }
}


