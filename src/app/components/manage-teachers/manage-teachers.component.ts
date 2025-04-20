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
  users: any;

  constructor(private routes: Router, private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.users = [];
    this.sharedService.getAllUsers().subscribe((data: any) => {
      data.filter((x: any) => {
        if (x.role == "teacher") {
          this.users.push(x);
        }
      })
    });
  }

  openEditTeacherDialog(teacher: Teacher,id:any) {
    this.sharedService.add = false;
    this.sharedService.selectedTeacher = teacher;
    this.sharedService.selectedTeacherID = id;
    this.routes.navigate(['/add-teacher']);
  }

  deleteTeacher(id: number) {
    this.sharedService.delete(id).subscribe(() => {
      this.getTeachers(); // Refresh list after deletion
    });
  }

  openAddTeacherDialog() {
    this.sharedService.add = true;
    this.routes.navigate(['/add-teacher']);

  }
}
