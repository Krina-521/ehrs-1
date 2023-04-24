import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-laboratorist',
  templateUrl: './laboratorist.component.html',
  styleUrls: ['./laboratorist.component.css']
})
export class LaboratoristComponent {
  laboratoristForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ){}

  ngOnInit(): void {
    this.laboratoristForm = this._fb.group({
      laboratoristName: ['', [Validators.required, Validators.minLength(3)]],
      laboratoristEmail: ['', [Validators.required, Validators.email]],
      laboratoristDepartment: ['', [Validators.required]],
      laboratoristAddress: ['', [Validators.required]],
      laboratoristPhoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    })
  }
  get laboratoristName(){
    return this.laboratoristForm.get('laboratoristName');
  }
  get laboratoristEmail(){
    return this.laboratoristForm.get('laboratoristEmail');
  }
  get laboratoristDepartment(){
    return this.laboratoristForm.get('laboratoristDepartment');
  }
  get laboratoristAddress(){
    return this.laboratoristForm.get('laboratoristAddress');
  }
  get laboratoristPhoneNumber(){
    return this.laboratoristForm.get('laboratoristPhoneNumber');
  }
  onReset(){
    this.laboratoristForm.reset();
  }
  onSubmit(){
    console.log(this.laboratoristForm.value);
    this.laboratoristForm.reset();
  }
}
