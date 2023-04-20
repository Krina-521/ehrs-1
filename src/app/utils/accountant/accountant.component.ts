import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent {
  genders!: string[];
  bloodGroups!: string[];
  constructor(private common: CommonDataService){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
  }
}
