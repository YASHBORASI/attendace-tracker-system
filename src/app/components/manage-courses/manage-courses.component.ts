import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';
import { Course } from '../../model/course';
import { LogoutButtonComponent } from '../../logout-button/logout-button.component';

@Component({
  selector: 'app-manage-courses',
  standalone: true,
  imports: [FormsModule, CommonModule, LogoutButtonComponent],
  templateUrl: './manage-courses.component.html',
  styleUrl: './manage-courses.component.scss'
})
export class ManageCoursesComponent {

  constructor(private routes: Router, private sharedService: SharedServiceService) { }
  courses: any;
  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courses = [];
    this.sharedService.getCourses().subscribe((data: any) => {
      this.courses = data;
      console.log(this.courses)
    });

  }

  openAddCourseDialog(): void {
    this.sharedService.add = true;
    this.routes.navigate(['/add-course']);
  }


  openEditCourseDialog(courses: Course, id: any) {
    this.sharedService.add = false;
    this.sharedService.selectedCourse = courses;
    this.sharedService.selectedCourseID = id;
    this.routes.navigate(['/add-course']);
  }


  deleteCourse(id: any) {
    this.sharedService.deleteCourse(id).subscribe(() => {
      this.fetchCourses(); // Refresh list after deletion
    });
  }
}
