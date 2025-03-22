import { Component } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';

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

  constructor() { }

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
}