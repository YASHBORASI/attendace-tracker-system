import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports-t',
  imports: [CommonModule, FormsModule],
  templateUrl: './reports-t.component.html',
  styleUrl: './reports-t.component.scss'
})
export class ReportsTComponent {
  reports: any[] = [];
  teacherId!: number;

  constructor(private route: ActivatedRoute, private routes: Router) { }

  ngOnInit(): void {
    this.teacherId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchReports();
  }

  fetchReports(): void {
    // this.reportService.getReports(this.teacherId).subscribe(
    //   (data) => this.reports = data,
    //   (error) => console.error('Error fetching reports', error)
    // );
  }
}