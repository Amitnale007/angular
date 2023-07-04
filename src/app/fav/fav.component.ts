import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
  @Input("is-fav") istrue=true;
  @Output() change=new EventEmitter;
  onchange()
  {
    this.istrue=!this.istrue;
    this.change.emit();
  }

}
