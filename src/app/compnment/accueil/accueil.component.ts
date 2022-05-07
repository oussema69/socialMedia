import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  allpost!:any[];
  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.getAllPost()
  }
getAllPost(){
 this.service.getAllPosts().subscribe(
   res=>{
     this.allpost=res;
   }
 )

 }
}



