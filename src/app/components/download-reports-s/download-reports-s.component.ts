import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-download-reports-s',
  imports: [CommonModule,FormsModule ],
  templateUrl: './download-reports-s.component.html',
  styleUrl: './download-reports-s.component.scss'
})
export class DownloadReportsSComponent {
  reportTypes: string[] = ['PDF', 'CSV'];
  selectedReportType: string = 'PDF';  // Default report type
  studentId: number = 0;
  reportService: any;

  constructor( private route: ActivatedRoute, private routes: Router) {}

  ngOnInit(): void {
    this.studentId = +this.route.snapshot.paramMap.get('id')!;
  }

  downloadReport(): void {
    this.reportService.downloadReport(this.studentId, this.selectedReportType).subscribe(
      (response: Blob | MediaSource) => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = `AttendanceReport_${this.selectedReportType}.${this.selectedReportType.toLowerCase()}`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error: any) => console.error('Error downloading report', error)
    );
  }
}