import { Router } from '@angular/router';
import { todos } from '../todos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public todos: todos,
    public router: Router
    ) {  this.form = this.createFormGroup(); }

    createFormGroup() {
  return new FormGroup({
    id: new FormControl('number', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),  
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password:new FormControl ('', [Validators.required, Validators.minLength(6)]),
    password1:new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}
  get id() {
    return this.form.get('id');
  }
  get  firstname() {
    return this.form.get('firstname');
  }
  get  lastname() {
    return this.form.get('lastname');
  }
  get  email() {
    return this.form.get('email');
  }
  get  password() {
    return this.form.get('password');
  }
  get  password1() {
    return this.form.get('password1');
  }
  ngOnInit(): void {
  }

  onSubmit(){
    var userdata = this.form.value;
    if(userdata.password != userdata. password1){
        alert('password is not matching')
    }else{
    userdata['name'] = userdata.firstname + " " + userdata.lastname;
    localStorage.setItem("userdetails",JSON.stringify(userdata));
    this.router.navigateByUrl('/dashboard')
    } 
    
  }

}