import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';

@Component({
  selector: 'app-teacher-dashboard',
  imports: [StatCardComponent, CommonModule],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.scss'
})
export class TeacherDashboardComponent {
  totalSubjects: number = 4;
  totalClasses: number = 30;
  upcomingClasses: number = 5;

  // Actions for the teacher
  // actions = [
  //   { title: 'Manage Subjects', icon: 'fas fa-book', route: '/manage-subjects' },
  //   { title: 'View Attendance', icon: 'fas fa-calendar-check', route: '/view-attendance' },
  //   { title: 'Schedule Classes', icon: 'fas fa-calendar-alt', route: '/schedule-classes' },
  //   { title: 'Reports', icon: 'fas fa-chart-line', route: '/reports' },
  // ];

  constructor(private routes: Router,private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    // Any initialization logic can be placed here
  }

  onActionClick(route: string): void {
    // Handle action click navigation (placeholder)
  }
  ManageSubjectsT(){
    this.routes.navigate(['/manage-subjects-t']);
  }
  ViewAttendanceT(){
    this.routes.navigate(['/view-attendance-t']);
  }
  ScheduleClassesT(){
    this.sharedService.add = true;
    this.routes.navigate(['/schedule-classes-t']);
  }
  ReportsT(){
    this.routes.navigate(['/reports-t']);
  }

}