import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  genders!: string[];
  bloodGroups!: string[];
  constructor(private common: CommonDataService){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
  }
}
