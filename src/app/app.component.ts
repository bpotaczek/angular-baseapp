import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

import { CoreState, getMenuEntities, getMenuLoading } from './core/store';
import { AuthLogoutAction } from '@kbxl-lib/core';

import { User } from './shared/models';
import { map, filter, tap } from 'rxjs/operators';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kbxl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  menu$: Observable<MenuItem[]>;
  messages: Message[] = [];
  menuLoading$: Observable<boolean>;
  activeRoute$: Observable<string>;
  isNavCollapsed = true;
  isAuthorized = true;

  constructor(private store: Store<CoreState>, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.menu$ = this.store.pipe(select(getMenuEntities));
    this.menuLoading$ = this.store.pipe(map(getMenuLoading));
    this.activeRoute$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(() => this.isNavCollapsed = true),
      map(event => (event as NavigationEnd).urlAfterRedirects)
    );
  }

  logout() {
    this.store.dispatch(new AuthLogoutAction());
  }
}
