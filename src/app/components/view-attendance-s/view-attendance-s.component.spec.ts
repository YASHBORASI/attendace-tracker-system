import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendanceSComponent } from './view-attendance-s.component';

describe('ViewAttendanceSComponent', () => {
  let component: ViewAttendanceSComponent;
  let fixture: ComponentFixture<ViewAttendanceSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAttendanceSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAttendanceSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
