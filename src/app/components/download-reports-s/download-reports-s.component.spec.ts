import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadReportsSComponent } from './download-reports-s.component';

describe('DownloadReportsSComponent', () => {
  let component: DownloadReportsSComponent;
  let fixture: ComponentFixture<DownloadReportsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadReportsSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadReportsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
