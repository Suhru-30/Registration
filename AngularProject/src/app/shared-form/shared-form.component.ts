import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.css']
})
export class SharedFormComponent implements OnInit {
  formGroup = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required])
});

  constructor() {
    // this.formGroup.valueChanges.subscribe((val)=>console.log(val));
   }

  ngOnInit(): void {
  }

}
