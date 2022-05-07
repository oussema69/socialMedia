import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
@Input()
post : any;
comments: any=[]
likes=[];
cmt : any;

deleteCmtE : any;
  closeResult: string = '';
  modal: any;
  constructor(private service : PostService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getPostCommnets(this.post.id).subscribe(res=>{this.comments = res
    console.log(this.comments)})

    this.service.getLikes(this.post.id).subscribe(res =>{this.likes = res})
  }



  like(){
     const like = {
      post: this.post,
      user :this.post.poster,
      type: true
    }
    this.service.likePost(this.post.id , like).subscribe(res =>{
      this.service.getLikes(this.post.id).subscribe(res => this.likes = res)
    })
  }

  comment(){
    const comment = {
      nomCommentaire: "seconde",
      emailCommentaire: "first",
      sujetCommentaire:this.cmt,
      userCommenter: {
          id: 2,
          username: "test",
          email: "test",
          password: "test",
          tel: "test"
      }
    }
    this.cmt = ''
    this.service.comment(this.post.id,comment).subscribe(res =>{
      this.service.getPostCommnets(this.post.id).subscribe(res=>{this.comments = res
        console.log(this.comments)})
    })
  }


  deleteComnt(item : any){
    this.service.deleteComnt(item.id).subscribe(res =>{
        this.service.getPostCommnets(this.post.id).subscribe(res =>{
          this.comments = res
        })
    })
  }



  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
