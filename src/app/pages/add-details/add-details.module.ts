import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDetailsRoutingModule } from './add-details.route';
import { AddDetailsComponent } from './add-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DoctorComponent } from 'src/app/utils/doctor/doctor.component';
import { PatientsComponent } from 'src/app/utils/patients/patients.component';
import { NurseComponent } from 'src/app/utils/nurse/nurse.component';
import { AccountantComponent } from 'src/app/utils/accountant/accountant.component';
import { DepartmentComponent } from 'src/app/utils/department/department.component';
import { PharmacistComponent } from 'src/app/utils/pharmacist/pharmacist.component';
import { LaboratoristComponent } from 'src/app/utils/laboratorist/laboratorist.component';
import { ReceptionistComponent } from 'src/app/utils/receptionist/receptionist.component';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AddDetailsComponent,
    DoctorComponent,
    PatientsComponent,
    NurseComponent,
    AccountantComponent,
    DepartmentComponent,
    PharmacistComponent,
    LaboratoristComponent,
    ReceptionistComponent
  ],
  imports: [
    CommonModule,
    AddDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatNativeDateModule
  ]
})
export class AddDetailsModule { }
