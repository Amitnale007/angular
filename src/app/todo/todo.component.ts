import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  form=new FormGroup(
    {
      topic : new FormArray([]) 
    }
  )
  accept(topic:HTMLInputElement)
  {
    this.topics.push(new FormControl(topic.value));
    topic.value="";
  }
  remove(topic: AbstractControl)
  {
    let index=this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics()
  {
    return (this.form.get('topic') as FormArray)
  }
}
