import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
// import { AuthService } from '../auth.service';
// import { ImageUploadService } from '../services/image-upload.service';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // user$ = this.authService.currentUser$;
  genders!: string[];
  bloodGroups!: string[];
  relationShip!: string[];
  constructor(
    private common: CommonDataService,
  ){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.relationShip = this.common.getRelationshipStatus();
  }
  // uploadImage(event: any, user: User){
  //   this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.email}/${user.uid}`)
  //     .pipe(
  //       this.toast.observe({
  //         loading: 'Uploading profile image...',
  //         success: 'Image uploaded successfully',
  //         error: 'There was an error in uploading the image',
  //       }),
  //       concatMap((photoURL)=> this.authService.updateProfile({photoURL})))
  //       .subscribe();
  // }
}
