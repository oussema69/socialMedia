import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  posts:any = []
  post : any;
  constructor(private service : PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }



  public createpost(){

    const post = {
         domaine : "IT",
        content:   this.post,
        poster : {
             id: 1,
            username: "test",
            email: "test",
            password: "test",
            tel: "test"
        
    }
    }
    this.service.createPost(post).subscribe(data =>{
      console.log(data)
      this.post = ''
      this.getPosts()

    }, err => console.log(err))
  }
 

  getPosts(){
    this.service.getAllPosts().pipe().subscribe(
      data=> {this.posts = data 
      console.log(data)},
      err =>console.log(err)
    )
  }
}
 
 

