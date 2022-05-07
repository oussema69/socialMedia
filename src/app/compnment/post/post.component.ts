import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post : any ;
  showCommentsB = false ;
  likes =0;
  dislikes=0;
  comments : any =[]

  postContenu: any ;
  constructor(private service: PostService) { }

  ngOnInit(): void {

       
  }

 
 
  createPost(){

    const post = {
      
        domaine : "IT",
        content:this.postContenu ,
              poster : {
              id : 1,
             username : "test",
            email: "test",
            password: "test",
            tel: "test"
        
    }
    }
    this.service.createPost(post).subscribe(res =>{
      console.log(res )
    })
  }
}
