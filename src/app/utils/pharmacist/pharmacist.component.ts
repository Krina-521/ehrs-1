import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
export class PharmacistComponent {
  pharmacistForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
  ){}

  ngOnInit(): void {
    this.pharmacistForm = this._fb.group({
      pharmacistName: ['', [Validators.required, Validators.minLength(3)]],
      pharmacistEmail: ['', [Validators.required, Validators.email]],
      pharmacistDepartment: ['', [Validators.required]],
      pharmacistAddress: ['', [Validators.required]],
      pharmacistPhoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  get pharmacistName(){
    return this.pharmacistForm.get('pharmacistName');
  }
  get pharmacistEmail(){
    return this.pharmacistForm.get('pharmacistEmail');
  }
  get pharmacistDepartment(){
    return this.pharmacistForm.get('pharmacistDepartment');
  }
  get pharmacistAddress(){
    return this.pharmacistForm.get('pharmacistAddress');
  }
  get pharmacistPhoneNumber(){
    return this.pharmacistForm.get('pharmacistPhoneNumber');
  }
  onReset(){
    this.pharmacistForm.reset();
  }
  onSubmit(){
    console.log(this.pharmacistForm.value);
    this.pharmacistForm.reset();
  }
}
