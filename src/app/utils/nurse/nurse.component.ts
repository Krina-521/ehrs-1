import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent {
  genders!: string[];
  bloodGroups!: string[];
  constructor(private common: CommonDataService){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
  }
}
