import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';

@Component({
  selector: 'app-reports-t',
  imports: [CommonModule, FormsModule],
  templateUrl: './reports-t.component.html',
  styleUrl: './reports-t.component.scss'
})
export class ReportsTComponent {
  students: any[] = [];
  selectedStudentId: string = '';
  attendanceRecords: any[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient, private sharedService: SharedServiceService) {}

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.sharedService.getAllUsers().subscribe((res: any[]) => {
      this.students = res.filter(x => x.role === 'student');
    });
  }

  fetchAttendance() {
    if (!this.selectedStudentId) {
      alert('Please select a student');
      return;
    }

    this.isLoading = true;
    this.http.get<any[]>('http://localhost:5000/api/attendanceRoutes').subscribe({
      next: (res: any[]) => {
        // Filter by selected student
        this.attendanceRecords = res.filter(a => a.studentId._id === this.selectedStudentId);
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error fetching attendance:', err);
        alert('Failed to fetch attendance records');
        this.isLoading = false;
      }
    });
  }
}