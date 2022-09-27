import { todos } from '../todos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public router : Router,
    public todos: todos,
    ) 
      { this.form = this.createFormGroup(); }

      ngOnInit(): void {
      }
      createFormGroup() {
        return new FormGroup({
          username: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    
        });
      }
      get username() {
        return this.form.get('username');
      }
      get password() {
        return this.form.get('password');
      }

  Login() {
    (this.form.valid) 
      var userdata= this.todos.userList.filter((x:any)=> x.username == this.form.value.username);
      if(userdata.length>0){
        localStorage.setItem("userdetails", JSON.stringify(userdata[0]))
        this.router.navigateByUrl("/dashboard");
      }else{
        Swal.fire({
          title: 'No user with username'+ ' ' + this.form.value.username,
          icon: "error"
        })
        
      }
      
    } 
  }

 


