import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Task } from './Task';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DatePipe,UpperCasePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
// @Input({required:true}) task!:Task;
task = input<Task>();
@Output() complete= new EventEmitter<string>()
@Output() update= new EventEmitter<Task>()
completeTask = ()=>{
  this.complete.emit(this.task()!.id)
}
updateTask = ()=>{
  this.update.emit(this.task())
}
}
