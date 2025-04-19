import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Teacher } from '../../model/teacher';
import { SharedServiceService } from '../../Shared Service/shared-service.service';

@Component({
  selector: 'app-add-teacher',
  imports: [ReactiveFormsModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss',
  standalone: true,
})
export class AddTeacherComponent {
  teacherForm: FormGroup;
  showForm:boolean = true;

  constructor(private fb: FormBuilder,private sharedService :SharedServiceService) {
    this.teacherForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      mobile: ['', Validators.required],
      designation: ['', Validators.required],
      hireDate: ['', Validators.required],
    });
  }
  openAddTeacher(){

  }
  onSubmit(): void {
    if (this.teacherForm.valid) {
      const formValue = this.teacherForm.value;
      const teacher = new Teacher(
        formValue.firstname,
        formValue.lastname,
        formValue.username,
        formValue.password,
        formValue.email,
        formValue.department,
        formValue.mobile,
        formValue.designation,
        formValue.hireDate
      );
      this.sharedService.addUser(teacher).subscribe((data: any) => {
      });
    }
  }
  
}
