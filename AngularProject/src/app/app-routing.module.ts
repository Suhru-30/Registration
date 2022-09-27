
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RegisterComponent } from './register/register.component';
import { Pagenotfound1Component } from './pagenotfound1/pagenotfound1.component';
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'Register', component: RegisterComponent},
   {path:'dashboard', component:DashboardComponent},
 
    { path: '**',   pathMatch: 'full', 
    component: Pagenotfound1Component },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
