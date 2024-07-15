import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { user } from './user';
const randomItem = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: user;
  @Output() data= new EventEmitter<string>()
  // user = DUMMY_USERS[randomItem];
  get imgPath() {
    return 'assets/users/' + this.user.avatar
  }
  // userChanged = () => {
  //   const randomItem = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.user = DUMMY_USERS[randomItem];
  // }
  onSelectedUser=()=>{
    this.data.emit(this.user.id)
  }
}
