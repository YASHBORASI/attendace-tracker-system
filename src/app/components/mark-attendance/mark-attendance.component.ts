import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Correct import for HttpClient
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; // RouterModule for navigation
import { SharedServiceService } from '../../Shared Service/shared-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mark-attendance',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule], // Include RouterModule and HttpClientModule here
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent implements OnInit {
  students: any[] = [];
  attendanceData = [];
  classId = '';
  attendance: { [studentId: string]: string } = {};

  constructor(
    private sharedService: SharedServiceService,private routes: Router
  ) { }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList(): void {
    console.log(this.sharedService.selectedScheduleClassID);
    this.sharedService.getAllUsers().subscribe((data: any) => {
      if (data) {
        console.log(data);
        data.filter((x: any) => {
          if (x.course == this.sharedService.selectedScheduleClass.subject) {
            this.students.push(x);
          }
        })
      }
    });
    
    console.log(this.students);
  }

  mark(studentId: string, status: string) {
    this.attendance[studentId] = status;
  }

  submitAttendance() {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    const attendanceData = this.students.map(s => ({
      studentId: s._id,
      subjectId: this.sharedService.selectedScheduleClassID,
      date: today,
      status: this.attendance[s._id] || 'Absent'  // Default Absent if unmarked
    }));

    this.sharedService.markAttendance(attendanceData).subscribe({
      next: (res: any) => {
        alert('Attendance marked successfully!');
        this.deleteSchedulededClass(this.sharedService.selectedScheduleClassID);
      },
      error: (err: any) => {
        console.error('Error marking attendance:', err);
        alert('Failed to mark attendance');
      }
    });
  }

  deleteSchedulededClass(id: any) {
    this.sharedService.deleteScheduleClass(id).subscribe(() => {
      this.routes.navigate(['/teacher-dashboard']);
    });
  }
}
