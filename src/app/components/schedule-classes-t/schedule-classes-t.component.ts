import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleClasses } from '../../model/scheduleClass';
import { SharedServiceService } from '../../Shared Service/shared-service.service';

@Component({
  selector: 'app-schedule-classes-t',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './schedule-classes-t.component.html',
  styleUrl: './schedule-classes-t.component.scss'
})
export class ScheduleClassesTComponent {
  scheduleClassForm!: FormGroup;
  subjects: any[] = [];
  teacherId!: number;
  classDetails = {
    subject: '',
    date: '',
    startTime: '',
    endTime: ''
  };

  constructor(private routes: Router, private route: ActivatedRoute,private sharedService: SharedServiceService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    if (this.sharedService.add) {
      this.scheduleClassForm = this.fb.group({
        subject: ['', Validators.required],
        date: ['', Validators.required],
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
      });
    } else {
      this.scheduleClassForm = this.fb.group({
        subject: [this.sharedService.selectedScheduleClass.subject, Validators.required],
        lastname: [this.sharedService.selectedScheduleClass.date, Validators.required],
        username: [this.sharedService.selectedScheduleClass.startTime, Validators.required],
        password: [this.sharedService.selectedScheduleClass.endTime, Validators.required],
      });
    }
  }

  scheduleClass(): void {
    if (this.scheduleClassForm.valid) {
          const formValue = this.scheduleClassForm.value;
          const scheduleClass = new ScheduleClasses(
            formValue.subject,
            formValue.date,
            formValue.startTime,
            formValue.endTime,
            
          );
          if (this.sharedService.add) {
            this.sharedService.scheduleClass(scheduleClass).subscribe((data: any) => {
              this.routes.navigate(['/teacher-dashboard']);
            });
          } else {
            // this.sharedService.editSubject(scheduleClass, this.sharedService.selectedSubjectID).subscribe((data: any) => {
            //   this.routes.navigate(['/manage-subjects-t']);
            // });
          }
        }
  }

  resetForm(): void {
    this.classDetails = {
      subject: '',
      date: '',
      startTime: '',
      endTime: ''
    };
  }
}

