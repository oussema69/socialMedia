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
  
  public getPostCommnets(id: any) : Observable<any>{
    return this.http.get(`http://localhost:8081/comments/${id}`);
  }


  public createPost(post : any ): Observable<any>{
    return this.http.post("http://localhost:8081/post", post);
  }

  public likePost(id : number,like  : any): Observable<any>{
    return this.http.post("http://localhost:8081/like/"+id, like)
  }

  public dislikePost(id : number,like  : any): Observable<any>{
    return this.http.post("http://localhost:8081/dislike/"+id, like)
  }

  public getLikes(id: number): Observable<any>{
    return this.http.get("http://localhost:8081/likes/"+id)
  }

  public comment(id:number,cmt : any){
    return this.http.post("http://localhost:8081/comments/"+id , cmt);
  }

  public deleteComnt(id : any){
      return this.http.delete("http://localhost:8081/comments/"+id);
  }
}
