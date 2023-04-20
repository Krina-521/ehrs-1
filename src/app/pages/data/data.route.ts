import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data.component';

const addDetails_routes: Routes = [
  {path: '', component: DataComponent,
  // children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },{ path: 'dashboard',component:DashboardComponent}]
  // , children: [
  //   { path: '', component: DashboardComponent},
  //   // { path: 'dashboard', component: DashboardComponent}
  // ]
}
]

@NgModule({
  imports: [RouterModule.forChild(addDetails_routes)],
  exports: [RouterModule],
  providers: [],
})

export class DataRoutingModule {
}
