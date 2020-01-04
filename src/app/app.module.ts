import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HubComponent } from './components/hub/hub.component';


import {HTTP_INTERCEPTORS, HttpClientModule, } from '@angular/common/http';
import { UserChatsComponent } from './components/hub/user-chats/user-chats.component';
import { ChatMessagesComponent } from './components/hub/chat-messages/chat-messages.component';
import { LeftSideBarComponent } from './components/hub/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './components/hub/right-side-bar/right-side-bar.component';
import { NavbarComponent } from './components/hub/navbar/navbar.component';
import { PollComponent } from './components/hub/poll/poll.component';
import { NewChatComponent } from './components/hub/user-chats/new-chat/new-chat.component';
import { ListUserComponent } from './components/list-user/list-user.component';

import {ApiService} from "../app/services/api.service";
import {TokenInterceptor} from "./core/interceptor";


import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './auth/components/login/login.component';
import { JwtTokenInterceptor } from '../app/interceptors/jwt.token.interceptor';
import { CookieListComponent } from './pages/cookie-list/cookie-list.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';


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
    ListUserComponent,
    FooterComponent,
    HeaderComponent,
    CookieListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
