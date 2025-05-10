import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';

@Component({
  selector: 'app-view-attendance-t',
  imports: [CommonModule, FormsModule],
  templateUrl: './view-attendance-t.component.html',
  styleUrl: './view-attendance-t.component.scss'
})
export class ViewAttendanceTComponent {
  attendanceRecords: any[] = [];
  subjectId!: number;
  scheduledClasses: any[] = [];


  constructor(private route: ActivatedRoute, private routes: Router, private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.fetchAttendanceRecords();
  }

  fetchAttendanceRecords(): void {
    this.sharedService.getScheduleClass().subscribe((data: any) => {
      this.scheduledClasses = data;
      console.log(data);
    });
  }

  openAttendance(classItem: any, id: any) {
    this.sharedService.selectedScheduleClass = classItem;
    this.sharedService.selectedScheduleClassID = id;
    this.routes.navigate(['/mark-attendance']);
  }

  deleteSchedulededClass(id: any) {
    this.sharedService.deleteScheduleClass(id).subscribe(() => {
      this.fetchAttendanceRecords(); // Refresh list after deletion
    });
  }

  editSchedulededClass(classes: any, id: any) {
    this.sharedService.add = false;
    this.sharedService.selectedScheduleClass = classes;
    this.sharedService.selectedScheduleClassID = id;
    this.routes.navigate(['/schedule-classes-t']);
  }
}

