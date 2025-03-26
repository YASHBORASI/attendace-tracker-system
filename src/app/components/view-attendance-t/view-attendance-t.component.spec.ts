import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendanceTComponent } from './view-attendance-t.component';

describe('ViewAttendanceTComponent', () => {
  let component: ViewAttendanceTComponent;
  let fixture: ComponentFixture<ViewAttendanceTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAttendanceTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAttendanceTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
