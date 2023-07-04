import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    let user=this.route.snapshot.paramMap.get('username');
    console.log(id , ",", user );
  }
  submit()
  {
    this.router.navigate(['followers']);
  }

}
