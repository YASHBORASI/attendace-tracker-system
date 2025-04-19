import { Component } from '@angular/core';
import { Teacher } from '../../model/teacher';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedServiceService } from '../../Shared Service/shared-service.service';

@Component({
  selector: 'app-manage-teachers',
  imports: [CommonModule],
  templateUrl: './manage-teachers.component.html',
  styleUrl: './manage-teachers.component.scss'
})
export class ManageTeachersComponent {
  teachers: Teacher[] = [];
  displayedColumns: string[] = ['name', 'email', 'department', 'actions'];
  users:any;

  constructor(private routes: Router,private sharedService :SharedServiceService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.sharedService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });

    console.log(this.users);


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
    console.log(id,'id');
    this.sharedService.delete(id).subscribe(() => {
      this.getTeachers(); // Refresh list after deletion
      this.sharedService.getAllUsers().subscribe((data: any) => {
        this.users = data;
      });
    });
  }
  openAddTeacherDialog() {
    this.routes.navigate(['/add-teacher']);

  }
}
