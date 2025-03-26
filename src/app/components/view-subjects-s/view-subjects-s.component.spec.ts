import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectsSComponent } from './view-subjects-s.component';

describe('ViewSubjectsSComponent', () => {
  let component: ViewSubjectsSComponent;
  let fixture: ComponentFixture<ViewSubjectsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSubjectsSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubjectsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
