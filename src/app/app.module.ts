import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HubComponent } from './components/hub/hub.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule, } from '@angular/common/http';
import { UserChatsComponent } from './components/hub/user-chats/user-chats.component';
import { ChatMessagesComponent } from './components/hub/chat-messages/chat-messages.component';
import { LeftSideBarComponent } from './components/hub/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './components/hub/right-side-bar/right-side-bar.component';
import { NavbarComponent } from './components/hub/navbar/navbar.component';
import { PollComponent } from './components/hub/poll/poll.component';
import { NewChatComponent } from './components/hub/user-chats/new-chat/new-chat.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/components/login/login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { RegisterSuccessComponent } from './auth/components/register-success/register-success.component';
import {HttpClientInterceptor} from './http-client-interceptor';
import {NgxWebstorageModule} from 'ngx-webstorage'; //Need to downloan npm install --save ngx-webstorage



@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    LoginComponent,
    UserChatsComponent,
    ChatMessagesComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    NavbarComponent,
    PollComponent,
    NewChatComponent,
    FooterComponent,
    HeaderComponent,
    
    RegisterComponent,
    RegisterSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {path: 'register  ', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register-success', component: RegisterSuccessComponent},      
    ]),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
