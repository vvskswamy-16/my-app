import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { AllInOneComponent } from './all-in-one/all-in-one.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { FlipkartApiComponent } from './flipkart-api/flipkart-api.component';
import { GmailComponent } from './gmail/gmail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserTaskComponent } from './create-user-task/create-user-task.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesComponent,
    PipesComponent,
    TasksComponent,
    FlipkartComponent,
    HigherOrderComponent,
    AllInOneComponent,
    EmployeesComponent,
    VehicleComponent,
    BankaccountComponent,
    FlipkartApiComponent,
    GmailComponent,
    CreateVehicleComponent,
    StudentFormComponent,
    StudentCardComponent,
    CreateUserComponent,
    CreateUserTaskComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
