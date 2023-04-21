import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  genders!: string[];
  bloodGroups!: string[];
  patientForm!: FormGroup;
  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();

    this.patientForm = this._fb.group({
      patientName: ['', [Validators.required, Validators.minLength(3)]],
      patientEmail: ['', [Validators.required, Validators.email]],
      patientDepartment: ['', [Validators.required]],
      patientGender: ['', [Validators.required]],
      patientBirthDate: ['', [Validators.required]],
      patientBloodGroup: ['', [Validators.required]],
      patientAddress: ['', [Validators.required]],
      patientPhoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    })
  }
  get patientName(){
    return this.patientForm.get('patientName');
  }
  get patientEmail(){
    return this.patientForm.get('patientEmail');
  }
  get patientDepartment(){
    return this.patientForm.get('patientDepartment');
  }
  get patientGender(){
    return this.patientForm.get('patientGender');
  }
  get patientBirthDate(){
    return this.patientForm.get('patientBirthDate');
  }
  get patientBloodGroup(){
    return this.patientForm.get('patientBloodGroup');
  }
  get patientAddress(){
    return this.patientForm.get('patientAddress');
  }
  get patientPhoneNumber(){
    return this.patientForm.get('patientPhoneNumber');
  }
  onReset(){
    this.patientForm.reset();
  }
  onSubmit(){
    console.log(this.patientForm.value);
    this.patientForm.reset();
  }
}
