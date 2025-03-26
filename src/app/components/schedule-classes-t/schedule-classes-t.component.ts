import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schedule-classes-t',
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule-classes-t.component.html',
  styleUrl: './schedule-classes-t.component.scss'
})
export class ScheduleClassesTComponent {
  subjects: any[] = [];
  teacherId!: number;
  classDetails = {
    subject: '',
    date: '',
    startTime: '',
    endTime: ''
  };

  constructor(private routes: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teacherId = +this.route.snapshot.paramMap.get('id')!;
    this.loadSubjects();
  }

  loadSubjects(): void {
    // this.scheduleService.getSubjects(this.teacherId).subscribe(
    //   (data) => this.subjects = data,
    //   (error) => console.error('Error loading subjects', error)
    // );
  }

  scheduleClass(): void {
    // this.scheduleService.scheduleClass(this.classDetails).subscribe(
    //   (response) => {
    //     alert('Class scheduled successfully!');
    //     this.resetForm();
    //   },
    //   (error) => console.error('Error scheduling class', error)
    // );
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

