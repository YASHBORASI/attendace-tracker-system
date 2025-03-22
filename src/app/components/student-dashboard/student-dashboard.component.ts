import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule,StatCardComponent ],
  
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {
  totalSubjects: number = 6;
  totalClasses: number = 50;
  attendedClasses: number = 45;
  attendancePercentage: number = 0;

  // Actions (placeholders for now)
  actions = [
    { title: 'View Subjects', icon: 'fas fa-book', route: '/subjects' },
    { title: 'View Attendance', icon: 'fas fa-calendar-check', route: '/attendance' },
    { title: 'Download Reports', icon: 'fas fa-download', route: '/reports' },
    { title: 'Profile Settings', icon: 'fas fa-user-cog', route: '/profile' },
  ];

  constructor() {}

  ngOnInit(): void {
    // Calculate the attendance percentage
    this.calculateAttendancePercentage();
  }

  calculateAttendancePercentage(): void {
    this.attendancePercentage = (this.attendedClasses / this.totalClasses) * 100;
  }

  onActionClick(route: string): void {
    // Navigate to the selected action's route (placeholder action)
    console.log(`Navigating to ${route}`);
  }
}
