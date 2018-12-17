import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

import { User } from '../../../shared/models';
import { UserFeatureState, getSelectedUser, UserSelectedAction } from '../../store';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user-profile-container.component.html',
  styleUrls: ['./user-profile-container.component.css']
})
export class UserProfileContainerComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userStore: Store<UserFeatureState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      filter(p => p.id),
      map(p => p.id)
    ).subscribe(id => {
      this.userStore.dispatch(new UserSelectedAction(id));
    });
    this.user$ = this.userStore.pipe(map(getSelectedUser));
  }
}
