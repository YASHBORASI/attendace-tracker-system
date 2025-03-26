import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsSComponent } from './profile-settings-s.component';

describe('ProfileSettingsSComponent', () => {
  let component: ProfileSettingsSComponent;
  let fixture: ComponentFixture<ProfileSettingsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSettingsSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSettingsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
