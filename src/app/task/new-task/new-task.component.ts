import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { data, Task } from '../tasks/Task';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<data>();
  task = input<data>({
    date: '',
    title: '',
    summary: '',
  });
  // @Input() task:data={
  //   date: '',
  //   title: '',
  //   summary: '',
  // }
  // @Input({required:true}) update:boolean=false;
  update=input.required<boolean>()
  // date: string = '';
  // title: string = '';
  // summary: string = '';

  closDialog = () => {
    this.close.emit();
  }
  submitTask = () => {
    this.add.emit({
      date: this.task().date,
      title: this.task().title,
      summary:this.task().summary
    })
  }
}
