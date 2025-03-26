import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectsTComponent } from './manage-subjects-t.component';

describe('ManageSubjectsTComponent', () => {
  let component: ManageSubjectsTComponent;
  let fixture: ComponentFixture<ManageSubjectsTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSubjectsTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSubjectsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
