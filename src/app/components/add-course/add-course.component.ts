import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedServiceService } from '../../Shared Service/shared-service.service';
import { Router } from '@angular/router';
import { Course } from '../../model/student/course';

@Component({
  selector: 'app-add-course',
  imports: [ReactiveFormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
  courseForm!: FormGroup;

  constructor(private fb: FormBuilder, private routes: Router, private sharedService: SharedServiceService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    if (this.sharedService.add) {
      this.courseForm = this.fb.group({
        name: ['', Validators.required],
        code: ['', Validators.required],
        description: ['', Validators.required],
        semester: ['', Validators.required],
      });
    } else {
      this.courseForm = this.fb.group({
        name: [this.sharedService.selectedCourse.name, Validators.required],
        code: [this.sharedService.selectedCourse.code, Validators.required],
        description: [this.sharedService.selectedCourse.description, Validators.required],
        semester: [this.sharedService.selectedCourse.semester, Validators.required],
      });
    }
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const formValue = this.courseForm.value;
      const course = new Course(
        formValue.name,
        formValue.code,
        formValue.description,
        formValue.semester,
      );
      if (this.sharedService.add) {
        this.sharedService.addCourse(course).subscribe((data: any) => {
          this.routes.navigate(['/manage-courses']);
        });
      } else {
        this.sharedService.editCourse(course, this.sharedService.selectedCourseID).subscribe((data: any) => {
          this.routes.navigate(['/manage-courses']);
        });
      }
    }
  }

}
