import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';

@Component({
  selector: 'app-mark-attendance',
  imports: [CommonModule],
  templateUrl: './mark-attendance.component.html',
  styleUrl: './mark-attendance.component.scss'
})
export class MarkAttendanceComponent implements OnInit {
  students:any[]=[];
  attendanceData = [];
  classId = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router,private sharedService: SharedServiceService) {}

  ngOnInit() {
    console.log(this.sharedService.selectedScheduleClass.subject);
    this.getStudentList();
  }

  getStudentList(): void{
    this.sharedService.getAllUsers().subscribe((data: any) => {
      data.filter((x: any)=>{
        if(x.course == this.sharedService.selectedScheduleClass.subject){
          this.students.push(x);
        }
      })
    });
    console.log(this.students);
  }

  mark(studentId: string, status: string) {
    // const entry = this.attendanceData.find(a => a?.studentId === studentId);
    // if (entry) {
    //   entry.status = status;
    // }
  }

  submitAttendance() {
    const payload = {
      classId: this.classId,
      date: new Date(),
      attendanceData: this.attendanceData
    };

    this.http.post('/api/attendance', payload).subscribe(() => {
      alert('Attendance Submitted!');
      // this.router.navigate(['/teacher-dashboard']);
    });
  }
}