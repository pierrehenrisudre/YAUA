import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  set user(iuser: IUser) {
    if(!iuser) {
      this._router.navigate([{outlets: {primary: 'users' ,userInfos: null}}]);
    }
    else {
      this._user = iuser;
      this._buildUserDetailsForm();
    }
  }
  _user: IUser;

  userDetailsForm: FormGroup;
  nameTitleCtrl: FormControl;
  nameFirstCtrl: FormControl;
  nameLastCtrl: FormControl;
  latitudeCtrl: FormControl;
  longitudeCtrl: FormControl;

  constructor(private _router: Router) {}

  ngOnInit() {

  }

  onSubmit() {
    this._user.name.title = this.nameTitleCtrl.value;
    this._user.name.first = this.nameFirstCtrl.value;
    this._user.name.last = this.nameLastCtrl.value;
    this._user.location.coordinates.latitude = this.latitudeCtrl.value;
    this._user.location.coordinates.longitude = this.longitudeCtrl.value;
    this.userDetailsForm.reset(this.userDetailsForm.value);
  }

  private _buildUserDetailsForm() {
    this.nameTitleCtrl = new FormControl(this._user.name.title, Validators.required);
    this.nameFirstCtrl = new FormControl(this._user.name.first, Validators.required);
    this.nameLastCtrl = new FormControl(this._user.name.last, Validators.required);
    this.latitudeCtrl = new FormControl(this._user.location.coordinates.latitude);
    this.longitudeCtrl = new FormControl(this._user.location.coordinates.longitude);

    this.userDetailsForm = new FormGroup({
      nameTitle: this.nameTitleCtrl,
      nameFirst: this.nameFirstCtrl,
      nameLast: this.nameLastCtrl,
      latitude: this.latitudeCtrl,
      longitude: this.longitudeCtrl,
    });
  }
}
