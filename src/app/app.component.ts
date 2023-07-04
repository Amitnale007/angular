import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    title: "title",
    isfav : true
  }
  tweet={
    body :"...",
    tcount:10,
    tistrue: true
  }
  isfavchange()
  {
    console.log("favorite is changed");
  }
}
