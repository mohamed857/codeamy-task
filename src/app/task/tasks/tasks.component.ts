import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Task } from './Task';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
// @Input({required:true}) task!:Task;
completed: boolean = false;
completeText:string = 'complete';
task = input<Task>();
@Output() complete= new EventEmitter<string>()
@Output() update= new EventEmitter<Task>()
completeTask = ()=>{
  this.complete.emit(this.task()!.id)
  this.completed = true;
  this.completeText='completed';
}
updateTask = ()=>{
  this.update.emit(this.task())
}
}
