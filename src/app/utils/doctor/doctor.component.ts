import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  genders!: string[];
  bloodGroups!: string[];
  doctorForm!: FormGroup;
  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();

    this.doctorForm = this._fb.group({
      doctorName: ['', [Validators.required, Validators.minLength(3)]],
      doctorEmail: ['', [Validators.required, Validators.email]],
      doctorDepartment: ['', [Validators.required]],
      doctorGender: ['', [Validators.required]],
      doctorBirthdate: ['', [Validators.required]],
      doctorBloodGroup: ['', [Validators.required]],
      doctorAddress: ['', [Validators.required]],
      doctorPhone: ['', [Validators.required, Validators.minLength(10)]],
    })
  }
  get doctorName(){
    return this.doctorForm.get('doctorName');
  }
  get doctorEmail(){
    return this.doctorForm.get('doctorEmail');
  }
  get doctorDepartment(){
    return this.doctorForm.get('doctorDepartment');
  }
  get doctorGender(){
    return this.doctorForm.get('doctorGender');
  }
  get doctorBirthdate(){
    return this.doctorForm.get('doctorBirthdate');
  }
  get doctorBloodGroup(){
    return this.doctorForm.get('doctorBloodGroup');
  }
  get doctorAddress(){
    return this.doctorForm.get('doctorAddress');
  }
  get doctorPhone(){
    return this.doctorForm.get('doctorPhone');
  }
  onReset(){
    this.doctorForm.reset();
  }
  onSubmit(){
    console.log(this.doctorForm.value);
    this.doctorForm.reset();
  }
}
