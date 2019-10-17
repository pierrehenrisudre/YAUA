import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { IUser, IUserId } from '../../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  users: IUser[];
  @ViewChild('searchfield', {static: false}) searchfield;
  @ViewChild(CdkVirtualScrollViewport, {static: false}) virtualScroll: CdkVirtualScrollViewport;
  @Output()
  userSelected: EventEmitter<string> = new EventEmitter();

  usersFilter: string;
  barLimit: number = 50;

  constructor() {}

  ngOnInit() {
  }

  navigateToUser(id: IUserId) {
    this.userSelected.emit(id.value);
  }

  search() {
    this.virtualScroll.scrollToIndex(0);
  }
}
