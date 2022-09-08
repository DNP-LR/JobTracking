import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {NavComponent} from "./dashboard/nav/nav.component";
import {AdminSettingComponent} from "./dashboard/admin-setting/admin-setting.component";


const routes: Routes= [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/registration', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {
    path: 'dashboard-nav', component : NavComponent,
    children:[
      {path: '', redirectTo: '/dashboard-nav', pathMatch: 'full'},
      {path: '', title: 'Main Component',  component: DashboardComponent},
      {path: 'dashboard-nav', component: DashboardComponent},
      {path: 'admin-settings', title: 'Main Component',  component: AdminSettingComponent},
      {
        path: 'dashboard-nav', loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
