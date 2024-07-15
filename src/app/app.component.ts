import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent]
})
export class AppComponent {
  title = 'first-angular-app';
  // users = DUMMY_USERS;
  users =signal(DUMMY_USERS) ;
  // userscomputed = computed(()=>this.users().)
  selectedUserId!:string;
  get selectedUser(){
    return this.users().find((user)=>user.id===this.selectedUserId)
  }
  onSelectedUserId=(id:string)=>{
    this.selectedUserId=id;
  }
}
