import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HubComponent} from './components/hub/hub.component';


import {AddUserComponent} from "../app/components/add-user/add-user.component"
import {ListUserComponent} from "../app/components/list-user/list-user.component";
import {EditUserComponent} from "../app/components/edit-user/edit-user.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'hub', component: HubComponent },
  {path : '', component : LoginComponent}
  
];
export const routing = RouterModule.forRoot(routes);
