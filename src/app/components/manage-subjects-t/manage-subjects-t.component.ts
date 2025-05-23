import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from '../../Shared Service/shared-service.service';

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
  subject:any;

  constructor(private route: ActivatedRoute, private routes: Router,private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.fetchSubjects();
  }

  fetchSubjects(): void {
    this.subject = [];
    this.sharedService.getSubjects().subscribe((data: any) => {
      this.subjects = data;
      
    });
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

  // getSubjects() {
  //   this.subject = [];
  //   this.sharedService.getAllUsers().subscribe((data: any) => {
  //     this.subject = data;
  //   });
  // }

  // deleteSubject(subjectId: number): void {
  //   // this.subjectService.deleteSubject(subjectId).subscribe(
  //   //   () => this.fetchSubjects(),
  //   //   (error=0) => console.error('Error deleting subject', error)
  //   // );
  // }

  selectSubject(subject: any): void {
    this.selectedSubject = { ...subject };
  }
  openAddSubjectDialog(){
    this.sharedService.add = true;
    this.routes.navigate(['/add-subject']);
  }
  openEditSubjectDalog(subject: any ,id:any) {
        this.sharedService.add = false;
        this.sharedService.selectedSubject = subject;
        this.sharedService.selectedSubjectID = id;
        this.routes.navigate(['/add-subject']);
      }
  
      deleteSubjects(id: any) {
        this.sharedService.deleteSubject(id).subscribe(() => {
          this.fetchSubjects(); // Refresh list after deletion
        });
      }
}