import { Component } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [StatCardComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  totalStudents: number = 0;
  totalTeachers: number = 0;
  totalAttendanceRecords: number = 0;

  constructor(private routes: Router) { }

  ngOnInit(): void {
    this.getDashboardStats();
  }

  // Fetching statistics for the dashboard
  getDashboardStats() {
  //   this.adminService.getDashboardStats().subscribe(
  //     (stats: any) => {
  //       this.totalStudents = stats.totalStudents;
  //       this.totalTeachers = stats.totalTeachers;
  //       this.totalAttendanceRecords = stats.totalAttendanceRecords;
  //     },
  //     (error: any) => {
  //       console.error('Failed to fetch dashboard stats', error);
  //     }
  //   );
  // }
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