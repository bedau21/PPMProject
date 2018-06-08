import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HistoryComponent } from './history/history.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { RegisterNurseComponent } from './register-nurse/register-nurse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavMenuComponent,
    DashboardComponent,
    PatientComponent,
    MedicineComponent,
    HistoryComponent,
    UserAccountComponent,
    RegisterDoctorComponent,
    RegisterNurseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
