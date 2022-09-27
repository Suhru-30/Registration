import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { todos } from './todos.service';
import { RegisterComponent } from './register/register.component';
import { ButtonComponent } from './component/button/button.component';
import { Pagenotfound1Component } from './pagenotfound1/pagenotfound1.component';
import { InputComponent } from './input/input.component';
import { SharedFormComponent } from './shared-form/shared-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ButtonComponent,
    Pagenotfound1Component,
    InputComponent,
    SharedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [todos],
  bootstrap: [AppComponent]
})
export class AppModule { }
