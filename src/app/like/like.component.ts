import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input("isTrue") isTrue : boolean;
  @Input("Count") Count : number;
  onchange()
  {
    this.Count +=this.isTrue? -1 : 1;
    this.isTrue=!this.isTrue;
  }
   
  

}
