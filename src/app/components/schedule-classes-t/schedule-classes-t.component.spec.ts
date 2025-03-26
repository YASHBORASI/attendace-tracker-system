import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleClassesTComponent } from './schedule-classes-t.component';

describe('ScheduleClassesTComponent', () => {
  let component: ScheduleClassesTComponent;
  let fixture: ComponentFixture<ScheduleClassesTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleClassesTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleClassesTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
