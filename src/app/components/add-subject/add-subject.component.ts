import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';
import { Subject } from '../../model/subject';

@Component({
  selector: 'app-add-subject',
  imports: [ReactiveFormsModule],
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.scss'
})
export class AddSubjectComponent {
  subjectForm!: FormGroup;
  constructor(private fb: FormBuilder, private routes: Router, private sharedService: SharedServiceService) {
  }




  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    if (this.sharedService.add) {
      this.subjectForm = this.fb.group({
        Subject: ['', Validators.required],
        Course: ['', Validators.required],
        Credit: ['', Validators.required],

      });
    } else {
      this.subjectForm = this.fb.group({

        Subject: [this.sharedService.selectedSubject.subject, Validators.required],
        Course: [this.sharedService.selectedSubject.course, Validators.required],
        Credit: [this.sharedService.selectedSubject.credit, Validators.required],


      });
    }
  }
  onSubmit(): void {
    if (this.subjectForm.valid) {
      const formValue = this.subjectForm.value;
      const subject = new Subject(
        formValue.Subject,
        formValue.Course,
        formValue.Credit,
        
      );
      if (this.sharedService.add) {
        this.sharedService.addSubject(subject).subscribe((data: any) => {
          this.routes.navigate(['/manage-subjects-t']);
        });
      } else {
        this.sharedService.editSubject(subject, this.sharedService.selectedSubjectID).subscribe((data: any) => {
          this.routes.navigate(['/manage-subjects-t']);
        });
      }
    }
  }
}
