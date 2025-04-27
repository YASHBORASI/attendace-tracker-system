import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from '../../model/student';
import { SharedServiceService } from '../../Shared Service/shared-service.service';
import { CommonModule } from '@angular/common';
import { Teacher } from '../../model/teacher';
import { LogoutButtonComponent } from '../../logout-button/logout-button.component';

@Component({
  selector: 'app-manage-students',
  standalone: true,
  imports: [MatTableModule, CommonModule, LogoutButtonComponent],
  templateUrl: './manage-students.component.html',
  styleUrl: './manage-students.component.scss'
})
export class ManageStudentsComponent {
  students: Student[] = [];
  displayedColumns: string[] = ['name', 'email', 'class', 'actions'];
  users:any;

  constructor(private routes: Router,private sharedService: SharedServiceService) {}

  ngOnInit(): void {
    this.getStudents();
  }



  addStudent(student: Student) {
    // this.studentService.addStudent(student).subscribe(() => {
    //   this.getStudents(); // Refresh the list
    // });
  }

  editStudent(student: Student) {
  // Logic for editing student details
  }

  openAddStudentDialog(){
    this.sharedService.add = true;
    this.routes.navigate(['/add-student']);
  }
  getStudents() {
    this.users = [];
    this.sharedService.getAllUsers().subscribe((data: any) => {
      data.filter((x: any) => {
        if (x.role == "student") {
          this.users.push(x);
        }
      })
    });
  }
  openEditStudentDialog(student: Student,id:any) {
      this.sharedService.add = false;
      this.sharedService.selectedStudent = student;
      this.sharedService.selectedStudentID = id;
      this.routes.navigate(['/add-student']);
    }

    deleteStudent(id: number) {
      this.sharedService.delete(id).subscribe(() => {
        this.getStudents(); // Refresh list after deletion
      });
    }
}