import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() inputId='';
  @Input() control=new FormControl();
  @Input() label='';

  errorMessages:Record<string,string>={
    required:'The field is required',
    email:'the e-mail is Invalid'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
