import { Component, OnInit } from '@angular/core';
import { MoshServiceService } from '../services/mosh-service.service';

@Component({
  selector: 'mosh-git',
  templateUrl: './mosh-git.component.html',
  styleUrls: ['./mosh-git.component.css']
})
export class MoshGitComponent {
  post=[];
  constructor(private service : MoshServiceService)
  {}
  
  ngOnInit(): void {
    this.service.getdata()
    .subscribe(Response=>{
      this.post=Response as any;
      console.log(Response);
    })
  }
}
