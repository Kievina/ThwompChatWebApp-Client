import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from '../app/auth/components/register/register.component';
import {HubComponent} from './components/hub/hub.component';




const routes: Routes = [
  { path: 'hub' , component: HubComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
