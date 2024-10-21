import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { CircleComponent } from './circle/circle.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { AllInOneComponent } from './all-in-one/all-in-one.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { FlipkartApiComponent } from './flipkart-api/flipkart-api.component';
import { GmailComponent } from './gmail/gmail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserTaskComponent } from './create-user-task/create-user-task.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  
  {path:'dashboard',canActivate:[AuthenticationGuard] ,component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'studentForm',component:StudentFormComponent},
    {path:'studentCard',component:StudentCardComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'tasks',component:TasksComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'higherOrder',component:HigherOrderComponent},
    {path:'allInOne',component:AllInOneComponent},
    {path:'employee',component:EmployeesComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'createVehicle',component:CreateVehicleComponent},
    {path:'bankaccount',component:BankaccountComponent},
    {path:'gmail',component:GmailComponent},
    {path:'flipkart-api',component:FlipkartApiComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'dice',component:DiceComponent},
    {path:'createUser',component:CreateUserComponent},
    {path:'createUserTask',component:CreateUserTaskComponent},
    {path:'vehicleDetails/:id',component:VehicleDetailsComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
