import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../../shared/models';
import { UserFeatureState, getUserEntities, UserLoadAction, UserUpdateAction } from '../../store';

@Component({
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css']
})
export class UserListContainerComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: User;

  constructor(private userStore: Store<UserFeatureState>) { }

  ngOnInit() {
    this.userStore.dispatch(new UserLoadAction());
    this.users$ = this.userStore.pipe(map(getUserEntities));
  }

  userSelected(event: any) {
    this.selectedUser = {...event.value};
  }

  update(user: User) {
    this.userStore.dispatch(new UserUpdateAction(user));
  }
}
