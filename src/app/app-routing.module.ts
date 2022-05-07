import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./compnment/post/post.component";
import {ProfileComponent} from "./compnment/profile/profile.component";
import {AccueilComponent} from "./compnment/accueil/accueil.component";
import { FollowersComponent } from './compnment/followers/followers.component';



const routes: Routes = [

  
  {path:'profile',component: ProfileComponent, children:[
    {path:'acc',component: AccueilComponent },
    {path:'post',component: PostComponent },
    {path:'fol',component:FollowersComponent}
  ] },
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
