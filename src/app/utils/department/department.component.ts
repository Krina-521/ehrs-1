import { Component } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departmentForm!: FormGroup;

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  constructor(
    private _fb: FormBuilder
  ){}
  ngOnInit(): void {
    this.departmentForm = this._fb.group({
      departmentName: ['', [Validators.required, Validators.minLength(3), this.noWhitespaceValidator]],
      description: ['', [Validators.required, Validators.maxLength(100), this.noWhitespaceValidator]],
    });
  }
  get departmentName(){
    return this.departmentForm.get('departmentName');
  }
  get description(){
    return this.departmentForm.get('description');
  }
  onReset(){
    this.departmentForm.reset();
  }
  onSubmit(){
    console.log(this.departmentForm.value);
    this.departmentForm.reset();
  }
}
