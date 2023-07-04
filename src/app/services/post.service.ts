import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http : HttpClient) { }
  getPost()
  {
     return this.http.get(this.url)
     .pipe(catchError((error: HttpErrorResponse)=>
     {
      if(error.status==0)
        console.log("change you json link");
      else{
        console.log("unexpectated error occured");
      }
      return throwError(error);
     }))
  }
  del(id)
  {
    let temp :string =this.url+"/"+ id;
    return this.http.delete(temp)
    .pipe(catchError((error:HttpErrorResponse)=>{
      if(error.status==404)
        alert("post Not Found");
      else
        alert("unexpectade error");
    return throwError(error);
    }))
 
  }
  create(post)
  {
    return this.http.post(this.url,JSON.stringify(post));  
  }
}
