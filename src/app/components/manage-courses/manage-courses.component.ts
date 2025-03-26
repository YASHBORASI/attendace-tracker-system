import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-courses',
  imports: [FormsModule, CommonModule],
  templateUrl: './manage-courses.component.html',
  styleUrl: './manage-courses.component.scss'
})
export class ManageCoursesComponent {
  courses: any[] = [];
  newCourse: any = { name: '', description: '' };
  selectedCourse: any = null;
  courseService: any;

  constructor(private routes: Router) { }

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courseService.getCourses().subscribe(
      (data: any[]) => this.courses = data,
      (error: any) => console.error('Error fetching courses', error)
    );
  }

  addCourse(): void {
    this.courseService.addCourse(this.newCourse).subscribe(
      () => {
        this.fetchCourses();
        this.newCourse = { name: '', description: '' };
      },
      (error: any) => console.error('Error adding course', error)
    );
  }

  updateCourse(): void {
    if (this.selectedCourse) {
      this.courseService.updateCourse(this.selectedCourse).subscribe(
        () => this.fetchCourses(),
        (error: any) => console.error('Error updating course', error)
      );
      this.selectedCourse = null;
    }
  }

  deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId).subscribe(
      () => this.fetchCourses(),
      (error: any) => console.error('Error deleting course', error)
    );
  }

  selectCourse(course: any): void {
    this.selectedCourse = { ...course };
  }
}
