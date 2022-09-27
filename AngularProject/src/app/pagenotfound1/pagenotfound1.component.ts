import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagenotfound1',
  templateUrl: './pagenotfound1.component.html',
  styleUrls: ['./pagenotfound1.component.css']
})
export class Pagenotfound1Component implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  clickHandler(){
    this.router.navigateByUrl("/login");
  }
}
