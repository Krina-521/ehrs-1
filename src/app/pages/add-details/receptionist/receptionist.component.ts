import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent {
  genders!: string[];
  bloodGroups!: string[];
  receptionistForm!: FormGroup;
  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.receptionistForm = this._fb.group({
      receptionistName: ['', [Validators.required, Validators.minLength(3)]],
      receptionistEmail: ['', [Validators.required, Validators.email]],
      receptionistGender: ['', [Validators.required]],
      receptionistBirthDate: ['', [Validators.required]],
      receptionistBloodGroup: ['', [Validators.required]],
      receptionistAddress: ['', [Validators.required]],
      receptionistPhoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      receptionistDepartment: [''],
    });
  }
  get receptionistName(){
    return this.receptionistForm.get('receptionistName');
  }
  get receptionistEmail(){
    return this.receptionistForm.get('receptionistEmail');
  }
  get receptionistGender(){
    return this.receptionistForm.get('receptionistGender');
  }
  get receptionistBirthDate(){
    return this.receptionistForm.get('receptionistBirthDate');
  }
  get receptionistBloodGroup(){
    return this.receptionistForm.get('receptionistBloodGroup');
  }
  get receptionistDepartment(){
    return this.receptionistForm.get('receptionistDepartment');
  }
  get receptionistAddress(){
    return this.receptionistForm.get('receptionistAddress');
  }
  get receptionistPhoneNumber(){
    return this.receptionistForm.get('receptionistPhoneNumber');
  }
  onReset(){
    this.receptionistForm.reset();
  }
  onSubmit(){
    console.log(this.receptionistForm.value);
    this.receptionistForm.reset();
  }
}
