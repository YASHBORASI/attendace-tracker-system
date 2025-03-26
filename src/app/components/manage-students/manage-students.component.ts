import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from '../../model/student';

@Component({
  selector: 'app-manage-students',
  imports: [MatTableModule],
  templateUrl: './manage-students.component.html',
  styleUrl: './manage-students.component.scss'
})
export class ManageStudentsComponent {
  students: Student[] = [];
  displayedColumns: string[] = ['name', 'email', 'class', 'actions'];

  constructor(private routes: Router) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
  //   this.studentService.getAllStudents().subscribe((data) => {
  //     this.students = data;
  //   });
  }

  addStudent(student: Student) {
    // this.studentService.addStudent(student).subscribe(() => {
    //   this.getStudents(); // Refresh the list
    // });
  }

  editStudent(student: Student) {
  // Logic for editing student details
  }

  deleteStudent(id: number) {
  //   this.studentService.deleteStudent(id).subscribe(() => {
  //     this.getStudents(); // Refresh the list
  //   });
  }
  openAddStudentDialog(){

  }
}