import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css'],
})
export class NurseComponent {
  genders!: string[];
  bloodGroups!: string[];
  departments!: string[];
  nurseForm!: FormGroup;
  constructor(private common: CommonDataService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.departments = this.common.getDepartment();

    this.nurseForm = this._fb.group({
      nurseName: ['', [Validators.required, Validators.minLength(3)]],
      nurseEmail: ['', [Validators.required, Validators.email]],
      nurseDepartment: ['', [Validators.required]],
      nurseGender: ['', Validators.required],
      nurseBirthDate: ['', Validators.required],
      nurseBloodGroup: ['', [Validators.required]],
      nurseAddress: ['', [Validators.required]],
      nursePhoneNumber: ['', [Validators.required]],
    });
  }
  onReset() {
    this.nurseForm.reset();
  }
  onSubmit() {
    console.log(this.nurseForm.value);
    this.nurseForm.reset();
  }
}
