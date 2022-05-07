import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { PostService } from 'src/app/services/post.service';
=======
import { PostService } from 'src/app/service/post.service';
>>>>>>> ccaa32c91ae274e7c0d4b08e0dcf8f33a12cfbba

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
<<<<<<< HEAD
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
=======
  allpost!:any[];
  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.getAllPost()
>>>>>>> ccaa32c91ae274e7c0d4b08e0dcf8f33a12cfbba
  }
getAllPost(){
 this.service.getAllPosts().subscribe(
   res=>{
     this.allpost=res;
   }
 )

<<<<<<< HEAD
  getPosts(){
    this.service.getAllPosts().pipe().subscribe(
      data=> {this.posts = data 
      console.log(data)},
      err =>console.log(err)
    )
  }
=======
 }
>>>>>>> ccaa32c91ae274e7c0d4b08e0dcf8f33a12cfbba
}



