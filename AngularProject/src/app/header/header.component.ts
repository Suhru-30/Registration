import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedclass:any = "a";
  @Input() UserName:any ='Test User';
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(public router : Router) {
    
   }

  ngOnInit(): void {
  }
  addItem(event:any){
    this.selectedclass=event;
    console.log(event);
    
  }
  clickHandler(){
    this.router.navigateByUrl("/login");
  }


}
