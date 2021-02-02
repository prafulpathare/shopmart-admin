import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { SigninComponent } from './comps/signin/signin.component';
import { HeaderComponent } from './comps/header/header.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { SupplierComponent } from './comps/supplier/supplier.component';
import { CustomerComponent } from './comps/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent,
    HeaderComponent,
    ProfileComponent,
    SupplierComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
