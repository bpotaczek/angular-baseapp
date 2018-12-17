import { Component, OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { User } from '../../../shared/models';

@Component({
  selector: 'kbxl-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnChanges {
  @Input() user: User;
  @Output() updated: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // You can check values here using 'changes' or the property 'this.user'
  }

  update() {
    this.updated.emit(this.user);
  }
}
