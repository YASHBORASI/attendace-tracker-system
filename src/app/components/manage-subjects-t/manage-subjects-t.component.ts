import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-subjects-t',
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-subjects-t.component.html',
  styleUrl: './manage-subjects-t.component.scss'
})
export class ManageSubjectsTComponent {
  subjects: any[] = [];
  newSubject: any = { name: '', course: '', credits: '' };
  selectedSubject: any = null;
  teacherId!: number;

  constructor(private route: ActivatedRoute, private routes: Router) { }

  ngOnInit(): void {
    this.teacherId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchSubjects();
  }

  fetchSubjects(): void {
    // this.subjectService.getSubjects(this.teacherId).subscribe(
    //   (data: any[]) => this.subjects = data,
    //   (error=0) => console.error('Error fetching subjects', error)
    // );
  }

  addSubject(): void {
    // this.subjectService.addSubject(this.newSubject).subscribe(
    //   () => {
    //     this.fetchSubjects();
    //     this.newSubject = { name: '', course: '', credits: '' };
    //   },
    //   (error=0) => console.error('Error adding subject', error)
    // );
  }

  updateSubject(): void {
    // if (this.selectedSubject) {
    //   this.subjectService.updateSubject(this.selectedSubject).subscribe(
    //     () => this.fetchSubjects(),
    //     (error=0) => console.error('Error updating subject', error)
    //   );
    //   this.selectedSubject = null;
    // }
  }

  deleteSubject(subjectId: number): void {
    // this.subjectService.deleteSubject(subjectId).subscribe(
    //   () => this.fetchSubjects(),
    //   (error=0) => console.error('Error deleting subject', error)
    // );
  }

  selectSubject(subject: any): void {
    this.selectedSubject = { ...subject };
  }
}