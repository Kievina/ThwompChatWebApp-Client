import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { CookieListComponent } from './pages/cookie-list/cookie-list.component';

import {HubComponent} from './components/hub/hub.component';


// import {AddUserComponent} from "../app/components/add-user/add-user.component"
// import {ListUserComponent} from "../app/components/list-user/list-user.component";
// import {EditUserComponent} from "../app/components/edit-user/edit-user.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { canActivate: [AuthGuard], path: 'cookies', component: CookieListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
