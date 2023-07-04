import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})


export class HttpServiceComponent implements OnInit{
  posts=[];
  
constructor(private service :PostService)
{

}
deletePost(post)
{
  this.service.del(post.id)
  .subscribe(Response=>{
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);
  })
}
createpost(input : HTMLInputElement)
{
  let post={title : input.value};
  input.value='';
  this.service.create(post)
  .subscribe(Response=>{
    post['id']=Response['id'];
    this.posts.splice(0,0,post);
    console.log(Response);
  })
}

ngOnInit(): void {
  this.service.getPost()
  .subscribe(Response=>{
    this.posts = Response as any;
  });
}
}
