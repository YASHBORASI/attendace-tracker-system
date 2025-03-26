import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings-s',
  imports: [CommonModule, FormsModule ],
  templateUrl: './profile-settings-s.component.html',
  styleUrl: './profile-settings-s.component.scss'
})
export class ProfileSettingsSComponent {
  profile: any = {
    name: '',
    email: '',
    password: ''
  };
  studentId!: number;

  constructor( private route: ActivatedRoute, private routes: Router) { }

  ngOnInit(): void {
    this.studentId = +this.route.snapshot.paramMap.get('id')!; // Get student ID from route params
    this.fetchProfile();
  }

  fetchProfile(): void {
    // this.profileService.getProfile(this.studentId).subscribe(
    //   (data=0) => this.profile = data,
    //   (error=0) => console.error('Error fetching profile', error)
    // );
  }

  updateProfile(): void {
    // this.profileService.updateProfile(this.studentId, this.profile).subscribe(
    //   () => alert('Profile updated successfully!'),
    //   (error=0) => console.error('Error updating profile', error)
    // );
  }
}
