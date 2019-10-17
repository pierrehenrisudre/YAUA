import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user.interface';

import { IAppState } from '../../store/state/app.state';
import { selectSelectedUser } from '../../store/selectors/user.selector';
import { GetUser } from '../../store/actions/user.actions';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe(id => {
      this._store.dispatch(new GetUser(this._route.snapshot.params.id));
    });
  }

  tabChanged(event) {

  }
}
