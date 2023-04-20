import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent {
  genders!: string[];
  bloodGroups!: string[];
  constructor(private common: CommonDataService){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
  }
}
