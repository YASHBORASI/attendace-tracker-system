import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-report',
  imports: [FormsModule, CommonModule],
  templateUrl: './attendance-report.component.html',
  styleUrl: './attendance-report.component.scss'
})
export class AttendanceReportComponent {
  attendanceReports: any[] = [];
  filteredReports: any[] = [];
  filterCriteria: string = ''; // To filter reports
  reportService: any;

  constructor(private routes: Router) { }

  ngOnInit(): void {
    this.fetchReports();
  }

  fetchReports(): void {
    this.reportService.getAttendanceReports().subscribe(
      (data: any[]) => {
        this.attendanceReports = data;
        this.filteredReports = data;
      },
      (error: any) => {
        console.error('Error fetching attendance reports', error);
      }
    );
  }

  filterReports(): void {
    this.filteredReports = this.attendanceReports.filter(report => {
      // Add filtering logic based on filterCriteria
      return report.studentName.includes(this.filterCriteria);
    });
  }
}