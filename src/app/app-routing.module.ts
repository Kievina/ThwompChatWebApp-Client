import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { CookieListComponent } from './pages/cookie-list/cookie-list.component';
import { RegisterComponent } from '../app/auth/components/register/register.component';
import {HubComponent} from './components/hub/hub.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hub' , component: HubComponent},
  {path: 'register', component: RegisterComponent},
  { canActivate: [AuthGuard], path: 'cookies', component: CookieListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
