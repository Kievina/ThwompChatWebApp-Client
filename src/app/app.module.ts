import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HubComponent } from './components/hub/hub.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule, } from '@angular/common/http';
import { UserChatsComponent } from './components/hub/user-chats/user-chats.component';
import { ChatMessagesComponent } from './components/hub/chat-messages/chat-messages.component';
import { LeftSideBarComponent } from './components/hub/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './components/hub/right-side-bar/right-side-bar.component';
import { NavbarComponent } from './components/hub/navbar/navbar.component';
import { PollComponent } from './components/hub/poll/poll.component';
import { NewChatComponent } from './components/hub/user-chats/new-chat/new-chat.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import {routing} from "./app-routing.module";
import {ApiService} from "../app/services/api.service";
import {TokenInterceptor} from "./core/interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    LoginComponent,
    RegisterComponent,
    UserChatsComponent,
    ChatMessagesComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    NavbarComponent,
    PollComponent,
    NewChatComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
