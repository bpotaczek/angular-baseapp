import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../../shared/models';
import { PostFeatureState, getPostEntities, UserLoadAction, UserUpdateAction } from '../../store';

@Component({
  templateUrl: './post-list-container.component.html',
  styleUrls: ['./post-list-container.component.css']
})
export class PostListContainerComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: User;

  constructor(private userStore: Store<PostFeatureState>) { }

  ngOnInit() {
    this.userStore.dispatch(new UserLoadAction());
    this.users$ = this.userStore.pipe(map(getPostEntities));
  }

  userSelected(event: any) {
    this.selectedUser = {...event.value};
  }

  update(user: User) {
    this.userStore.dispatch(new UserUpdateAction(user));
  }
}
