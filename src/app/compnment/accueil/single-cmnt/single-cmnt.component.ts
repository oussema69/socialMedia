import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-cmnt',
  templateUrl: './single-cmnt.component.html',
  styleUrls: ['./single-cmnt.component.css']
})
export class SingleCmntComponent implements OnInit {
@Input()
comment: any

@Output()
deleteCmt = new EventEmitter();
  constructor(private service : PostService) { }

  ngOnInit(): void {
  }


  delete(){
    this.deleteCmt.emit();
  }
}
