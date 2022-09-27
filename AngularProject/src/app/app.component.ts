import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prodaptsamplereq';
  addItem(newItem: string) {
    console.log(newItem);
    this.title=newItem;
  }
  clickHandler(){
    console.log('buttonClicked');
    
  }
}
