import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import {RouterModule} from "@angular/router";
import { EditProfilComponent } from './edit-profil/edit-profil.component';

@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    AdminSettingComponent,
    EditProfilComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [NavComponent]
})
export class DashboardModule { }
