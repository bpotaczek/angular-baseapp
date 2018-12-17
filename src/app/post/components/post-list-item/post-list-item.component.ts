import { Component, OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { User } from '../../../shared/models';

@Component({
  selector: 'kbxl-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnChanges {
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
