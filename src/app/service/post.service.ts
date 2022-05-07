import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 

  constructor(private http : HttpClient) { }


  public getAllPosts() : Observable<any>{
    return this.http.get("http://localhost:8081/post");
  } 
  
  public getPostCommnets(id: any) {
    return this.http.get(`http://localhost:8081/comments/${id}`);
  }


  public createPost(post : any ){
    return this.http.post("http://localhost:8081/post", post);
  }

  public likePost(id : number,like  : any){
    return this.http.post("http://localhost:8081/like/"+id, like)
  }

  public dislikePost(id : number,like  : any){
    return this.http.post("http://localhost:8081/dislike/"+id, like)
  }

  public getLikes(id: number){
    return this.http.get("http://localhost:8081/likes/"+id)
  }
}
