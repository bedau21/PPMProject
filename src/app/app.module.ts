import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SideNavMenuComponent } from './pages/background/side-nav-menu/side-nav-menu.component';
import { HeaderComponent } from './pages/background/header/header.component';
import { DashboardComponent } from './pages/patient-management/dashboard/dashboard.component';
import { PatientComponent } from './pages/patient-management/patient/patient.component';
import { MedicineComponent } from './pages/patient-management/medicine/medicine.component';
import { HistoryComponent } from './pages/patient-management/history/history.component';
import { UserAccountComponent } from './pages/account/user-account/user-account.component';
import { RegisterDoctorComponent } from './pages/account/register-doctor/register-doctor.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterNurseComponent } from './pages/account/register-nurse/register-nurse.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
    RegisterNurseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
