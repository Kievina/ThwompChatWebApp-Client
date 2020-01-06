import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HubComponent} from './components/hub/hub.component';
import { LoggedInContainerComponent } from './components/logged-in-container/logged-in-container.component';


const routes: Routes = [
  { path: 'hub', component: HubComponent },
  { path: 'logged-in', component: LoggedInContainerComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
