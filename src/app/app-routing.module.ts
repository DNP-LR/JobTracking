import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {NavComponent} from "./dashboard/nav/nav.component";
import {AdminSettingComponent} from "./dashboard/admin-setting/admin-setting.component";
import {EditProfilComponent} from "./dashboard/edit-profil/edit-profil.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {LoginComponent} from "./auth/login/login.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";


const routes: Routes= [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/registration', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  {
    path: 'dashboard-nav', component : NavComponent,
    children:[
      {path: '', redirectTo: '/dashboard-nav', pathMatch: 'full'},
      {path: '', title: 'Main Component',  component: DashboardComponent},
      {path: 'dashboard-nav', component: DashboardComponent},
      {path: 'admin-settings', title: 'Main Component',  component: AdminSettingComponent},
      {path: 'app-edit-profil', title: 'Main Component',  component: EditProfilComponent},
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
