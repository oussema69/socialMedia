import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProfileComponent } from './compnment/profile/profile.component';
import { PostComponent } from './compnment/post/post.component';
import {AppRoutingModule} from "./app-routing.module";
import { AccueilComponent } from './compnment/accueil/accueil.component';
import { FollowersComponent } from './compnment/followers/followers.component';
import { HttpClientModule } from '@angular/common/http';
import { SinglePostComponent } from './compnment/accueil/single-post/single-post.component';
import { SingleCmntComponent } from './compnment/accueil/single-cmnt/single-cmnt.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PostComponent,
    AccueilComponent,
    FollowersComponent,

    SinglePostComponent,
      SingleCmntComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
      NgbModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
