import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { SigninComponent } from './comps/signin/signin.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { SupplierComponent } from './comps/supplier/supplier.component';


const routes: Routes = [
  { path:  'signin', component:  SigninComponent},
  { path:  'supplier-management', component:  SupplierComponent},
  { path:  'customer-management', component:  ProfileComponent},
  { path:  'profile', component:  ProfileComponent},
  { path:  '', component:  DashboardComponent},
	// { path:  'user', component:  UserComponent},
	// { path:  'product', component:  ProductComponent},
	// { path:  'product/:product_id', component:  ProductComponent},
	// { path:  '', component:  HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
