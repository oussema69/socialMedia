import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './compnment/profile/profile.component';
import { PostComponent } from './compnment/post/post.component';
import {AppRoutingModule} from "./app-routing.module";
import { AccueilComponent } from './compnment/accueil/accueil.component';
import { FollowersComponent } from './compnment/followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PostComponent,
    AccueilComponent,
    FollowersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
