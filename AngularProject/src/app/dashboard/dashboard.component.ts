import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { todos } from '../todos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails:any ={};
  showCompleted:boolean= false;
  todoList :any= [];
  display = "none";
  addTodoListForm: FormGroup;
  constructor(
    public todos : todos,
    private fb: FormBuilder,
  ) { 
    this.addTodoListForm = this.fb.group({
      userId: [this.userDetails.id],      
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      completed: [true]
    });
  }

  ngOnInit(): void {
    this.userDetails= JSON.parse(localStorage.getItem("userdetails")|| "null");
    this.addTodoListForm.patchValue({
      userId:this.userDetails.id
    })
    this.todoList = this.todos.todoList.filter((x:any)=> x.userId === this.userDetails.id);
    
  }
  showcompletedList(){
    if (this.showCompleted) {
     this.todoList = this.todos.todoList.filter((x:any)=>x.userId === this.userDetails.id && x.completed === true);
    }else {
      this.todoList = this.todos.todoList.filter((x:any)=> x.userId === this.userDetails.id);
    }
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  submitForm(){
    console.log(this.addTodoListForm.value);
    this.todos.todoList.push(this.addTodoListForm.value);
    this.onCloseHandled();
    this.ngOnInit();

    // Here need to impliment the HTTP call
  }
  delete1Contact(userDetails:any) {
    localStorage.removeItem(userDetails.id);
    this.todoList = this.todos.todoList.filter((x:any)=> x!= userDetails);
  }
}
