import { Component } from '@angular/core';

@Component({
  selector: 'ngmodel-form',
  templateUrl: './ngmodel-form.component.html',
  styleUrls: ['./ngmodel-form.component.css']
})
export class NgmodelFormComponent {
  data=[
    {id : 1 , method:"email"},
    {id : 2 , method : "mobile"}
  ]
  onchange(x)
  {
    console.log(x);
  }
  getdata(x)
  {
    console.log(x);
  }
}
