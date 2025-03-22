import { Component } from '@angular/core';
import { Teacher } from '../../model/teacher';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-teachers',
  imports: [
    MatTableModule,
  ],
  templateUrl: './manage-teachers.component.html',
  styleUrl: './manage-teachers.component.scss'
})
export class ManageTeachersComponent {
  teachers: Teacher[] = [];
  displayedColumns: string[] = ['name', 'email', 'department', 'actions'];

  constructor(private routes: Router) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    // this.teacherService.getAllTeachers().subscribe((data) => {
    //   this.teachers = data;
    // });
  }

  addTeacher(teacher: Teacher) {
    // this.teacherService.addTeacher(teacher).subscribe(() => {
    //   this.getTeachers(); // Refresh list after adding
    // });
  }

  editTeacher(teacher: Teacher) {
    // Logic to edit teacher
  }

  deleteTeacher(id: number) {
    // this.teacherService.deleteTeacher(id).subscribe(() => {
    //   this.getTeachers(); // Refresh list after deletion
    // });
  }
  openAddTeacherDialog() {

  }
}
