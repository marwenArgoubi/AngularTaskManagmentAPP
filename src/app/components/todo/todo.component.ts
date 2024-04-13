import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
list:Todo[]=[];
taskValue:string='';
isCompleted:boolean=false;
constructor(private toasterService:ToastrService){}
ngOnInit(): void {
console.log(this.list);

}

addTask(){
  let id = this.list.length+1;
const task:Todo={
  id:id,
  task_name:this.taskValue,
  isCompleted:false
}
  this.list.unshift(task);
  this.ngOnInit();
}
deleteTask(task:Todo){
var index = this.list.indexOf(task);
if(index>-1){
  this.list.splice(index,1);
  this.toasterService.error("Task deleted",'Deleted Successfuly');
}
}
onChange() {
  console.log("changed");
  this.isCompleted = !this.isCompleted
  this.isCompleted ? this.toasterService.success(`Task succesfully completed`, 'completed') : this.toasterService.info(`Task not completed`, 'not completed');
}
}

