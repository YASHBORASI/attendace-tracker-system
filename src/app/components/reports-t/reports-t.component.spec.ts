import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTComponent } from './reports-t.component';

describe('ReportsTComponent', () => {
  let component: ReportsTComponent;
  let fixture: ComponentFixture<ReportsTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
