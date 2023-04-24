import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent {
  genders!: string[];
  bloodGroups!: string[];
  accountantForm!: FormGroup;
  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.accountantForm = this._fb.group({
      accountantName: ['', [Validators.required, Validators.minLength(3)]],
      accountantEmail: ['', [Validators.required, Validators.email]],
      accountantGender: ['', [Validators.required]],
      accountantBirthDate: ['', [Validators.required]],
      accountantBloodGroup: ['', [Validators.required]],
      accountantAddress: ['', [Validators.required]],
      accountantPhoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      accountantDepartment: [''],
    });
  }
  get accountantName(){
    return this.accountantForm.get('accountantName');
  }
  get accountantEmail(){
    return this.accountantForm.get('accountantEmail');
  }
  get accountantGender(){
    return this.accountantForm.get('accountantGender');
  }
  get accountantBirthDate(){
    return this.accountantForm.get('accountantBirthDate');
  }
  get accountantBloodGroup(){
    return this.accountantForm.get('accountantBloodGroup');
  }
  get accountantDepartment(){
    return this.accountantForm.get('accountantDepartment');
  }
  get accountantAddress(){
    return this.accountantForm.get('accountantAddress');
  }
  get accountantPhoneNumber(){
    return this.accountantForm.get('accountantPhoneNumber');
  }
  onReset(){
    this.accountantForm.reset();
  }
  onSubmit(){
    console.log(this.accountantForm.value);
    this.accountantForm.reset();
  }
}
