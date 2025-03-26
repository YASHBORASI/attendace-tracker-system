import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-attendance-t',
  imports: [CommonModule, FormsModule],
  templateUrl: './view-attendance-t.component.html',
  styleUrl: './view-attendance-t.component.scss'
})
export class ViewAttendanceTComponent {
  attendanceRecords: any[] = [];
  subjectId!: number;

  constructor(private route: ActivatedRoute, private routes: Router) {}

  ngOnInit(): void {
    this.subjectId = +this.route.snapshot.paramMap.get('subjectId')!;
    this.fetchAttendance();
  }

  fetchAttendance(): void {
    // this.attendanceService.getAttendance(this.subjectId).subscribe(
    //   (data) => this.attendanceRecords = data,
    //   (error) => console.error('Error fetching attendance data', error)
    // );
  }
}

