import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonDataService {
  constructor() {}

  departments: string[] = ['Radiological', 'Ortho', 'Neurological'];
  genders: string[] = ['Female', 'Male', 'Other'];
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  relationShip: string[] = ['Single', 'Married'];

  getDepartment() {
    return this.departments;
  }
  getGenders() {
    return this.genders;
  }
  getBloodGroups() {
    return this.bloodGroups;
  }
  getRelationshipStatus() {
    return this.relationShip;
  }
}
