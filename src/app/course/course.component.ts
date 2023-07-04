import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
    courses=[];
    value = 1;
    onadd()
    {
      let str="course"+ this.value.toString();
      this.courses.push(str);
      this.value++;
    }
    onremove(course)
    {
      let index=this.courses.indexOf(course);
      this.courses.splice(index,1);
    }
}
