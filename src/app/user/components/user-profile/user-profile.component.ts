import { Component, OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { User } from '../../../shared/models';

@Component({
  selector: 'kbxl-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnChanges {
  @Input() user: User;
  @Output() updated: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
