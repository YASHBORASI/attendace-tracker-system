import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Teacher } from '../../model/teacher';
import { SharedServiceService } from '../../Shared Service/shared-service.service';
import { Router } from '@angular/router';
import { LogoutButtonComponent } from '../../logout-button/logout-button.component';

@Component({
  selector: 'app-add-teacher',
  imports: [ReactiveFormsModule, LogoutButtonComponent],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss',
  standalone: true,
})
export class AddTeacherComponent {
  teacherForm!: FormGroup;
  showForm: boolean = true;

  constructor(private fb: FormBuilder, private sharedService: SharedServiceService, private routes: Router,) {

  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    if (this.sharedService.add) {
      this.teacherForm = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        department: ['', Validators.required],
        mobile: ['', Validators.required],
        designation: ['', Validators.required],
        hireDate: ['', Validators.required],
      });
    } else {
      this.teacherForm = this.fb.group({
        firstname: [this.sharedService.selectedTeacher.firstname, Validators.required],
        lastname: [this.sharedService.selectedTeacher.lastname, Validators.required],
        username: [this.sharedService.selectedTeacher.username, Validators.required],
        password: [this.sharedService.selectedTeacher.password, Validators.required],
        email: [this.sharedService.selectedTeacher.email, [Validators.required, Validators.email]],
        department: [this.sharedService.selectedTeacher.department, Validators.required],
        mobile: [this.sharedService.selectedTeacher.mobile, Validators.required],
        designation: [this.sharedService.selectedTeacher.designation, Validators.required],
        hireDate: [this.sharedService.selectedTeacher.hireDate, Validators.required],
      });
    }
  }

  onSubmit(): void {
    if (this.teacherForm?.valid) {
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
      if (this.sharedService.add) {
        this.sharedService.addUser(teacher).subscribe((data: any) => {
          this.routes.navigate(['/manage-teachers']);
        });
      } else {
        this.sharedService.editUser(teacher,this.sharedService.selectedTeacherID).subscribe((data: any) => {
          this.routes.navigate(['/manage-teachers']);
        });
      }
    }
  }

}
