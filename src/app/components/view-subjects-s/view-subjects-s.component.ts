import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-subjects-s',
  imports: [CommonModule],
  templateUrl: './view-subjects-s.component.html',
  styleUrl: './view-subjects-s.component.scss'
})
export class ViewSubjectsSComponent {
  subjects: any[] = [];
  studentId: number | undefined;
  subjectService: any;

  constructor(private routes: Router,  private route: ActivatedRoute ) { }

  ngOnInit(): void {
    // this.studentId = +this.route.snapshot.paramMap.get('id')!;  // Assuming you pass student ID in the route
    // this.fetchSubjects();
  }

  fetchSubjects(): void {
    // this.subjectService.getSubjects(this.studentId).subscribe(
    //   (data: any[]) => this.subjects = data,
    //   (error: any) => console.error('Error fetching subjects', error)
    // );
  }
}
