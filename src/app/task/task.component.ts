import { Component, Input } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { data, Task } from './tasks/Task';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [TasksComponent, NewTaskComponent]
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  update: boolean = false;
  showdialog: boolean = false;
  selectedUserId = 'u1'
  tasks = [
    {
      id: 't1',
      date: '5-5-2025',
      title: 'Angular',
      summary: 'angular learning features',
      userId: 'u1'
    },
    {
      id: 't2',
      date: '5-5-2025',
      title: 'html',
      summary: 'angular learning features',
      userId: 'u2'
    },
    {
      id: 't3',
      date: '5-5-2025',
      title: 'javaScript',
      summary: 'angular learning features',
      userId: 'u3'
    },
    {
      id: 't4',
      date: '5-5-2025',
      title: 'c++',
      summary: 'angular learning features',
      userId: 'u1'
    }
  ];
  task!: data;
  constructor() {
    const localTasks = localStorage.getItem('localTasks');
    if (localTasks) {
      this.tasks = JSON.parse(localTasks);
    }
  }
  get selectedUser() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
  completeTask = (id: string) => {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.updateLocalStorage();
  }
  updateTask = (task: data) => {

    this.update = true;
    this.showdialog = true;
    this.task = task;
    // this.tasks = this.tasks.filter((task) => task.id != id);
    // this.updateLocalStorage();
  }
  addTask = () => {
    this.task = {
      title: '',
      date: '',
      summary: ''
    };
    this.update = false;
    this.showdialog = true;
  }
  closDialog = () => {
    this.showdialog = false;
  }
  submitTask = (data: data) => {
    if (!this.update) {
      this.createTask(data)
    }
    else{

    }

    this.updateLocalStorage();
    this.showdialog = false;
  }

  showUpdatedItem(data :Task){
    let indexToUpdate = this.tasks.findIndex(item => item.id === data.id);
    this.tasks[indexToUpdate] = data;

   // some angular libraries require breaking the array reference
   // to pick up the update in the array and trigger change detection.
   // In that case, you can do following

   this.tasks = Object.assign([], this.tasks);
  }

  createTask=(data: data)=>{
    this.tasks.push({
      id: `t${this.tasks.length}`,
      date: data.date,
      title: data.title,
      summary: data.summary,
      userId: this.userId
    })
  }
  updateLocalStorage = () => {
    localStorage.setItem('localTasks', JSON.stringify(this.tasks))
  }
}
