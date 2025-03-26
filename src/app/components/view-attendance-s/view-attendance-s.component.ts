import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-attendance-s',
  imports: [CommonModule],
  templateUrl: './view-attendance-s.component.html',
  styleUrl: './view-attendance-s.component.scss'
})
export class ViewAttendanceSComponent {
  attendanceRecords: any[] = [];
  studentId: number | undefined;

  constructor(private route: ActivatedRoute,private routes: Router) { }

  ngOnInit(): void {
    this.studentId = +this.route.snapshot.paramMap.get('id')!;  // Assuming you pass student ID in the route
    this.fetchAttendance();
  }

  fetchAttendance(): void {
    // this.attendanceService.getAttendance(this.studentId).subscribe(
    //   (data) => this.attendanceRecords = data,
    //   (error) => console.error('Error fetching attendance', error)
  }
}
