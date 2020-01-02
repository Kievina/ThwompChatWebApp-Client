import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './components/hub/hub.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { UserChatsComponent } from './components/hub/user-chats/user-chats.component';
import { ChatMessagesComponent } from './components/hub/chat-messages/chat-messages.component';
import { LeftSideBarComponent } from './components/hub/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './components/hub/right-side-bar/right-side-bar.component';
import { NavbarComponent } from './components/hub/navbar/navbar.component';
import { NewChatComponent } from './components/hub/user-chats/new-chat/new-chat.component';


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
    NewChatComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
