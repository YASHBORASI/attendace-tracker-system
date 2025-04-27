import { Component } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';
import { LogoutButtonComponent } from '../../logout-button/logout-button.component';

@Component({
  selector: 'app-admin-dashboard',
standalone: true,
  imports: [StatCardComponent, LogoutButtonComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  totalStudents: number = 0;
  totalTeachers: number = 0;
  totalAttendanceRecords: number = 0;
  studentCount:any;
  teacherCount:any

  constructor(private routes: Router, private sharedService :SharedServiceService) { }

  ngOnInit(): void {
    this.getDashboardStats();
  }

  // Fetching statistics for the dashboard
  getDashboardStats() {
    this.sharedService.getAllUsers().subscribe((data: any) => {
      this.totalAttendanceRecords = data.length;
      data.filter((x: any)=>{
        if(x.role == "student"){
          this.totalStudents++
        }else if (x.role == "teacher"){
          this.totalTeachers++
        }
      })
    });

  }
  manageTeachers() {
    this.routes.navigate(['/manage-teachers']);
  }
  manageStudents(){
    this.routes.navigate(['/manage-students']);
  }
  AttendanceReport(){
    this.routes.navigate(['/attendance-report']);
  }
  ManageCourses(){
    this.routes.navigate(['/manage-courses']);
  }
}