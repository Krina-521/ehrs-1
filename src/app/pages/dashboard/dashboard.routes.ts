import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboard_routes: Routes = [
  {path: '', component: DashboardComponent,
  // children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },{ path: 'dashboard',component:DashboardComponent}]
  // , children: [
  //   { path: '', component: DashboardComponent},
  //   // { path: 'dashboard', component: DashboardComponent}
  // ]
}
]

@NgModule({
  imports: [RouterModule.forChild(dashboard_routes)],
  exports: [RouterModule],
  providers: [],
})

export class DashboardRoutingModule {
}
