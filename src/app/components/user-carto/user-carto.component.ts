import { Component, OnInit, Input } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-carto',
  templateUrl: 'user-carto.component.html'
})
export class UserCartoComponent implements OnInit {
  @Input()
  set user(iuser: IUser) {
    this._user = iuser;
    if(this.options) {
      this._recenterCarto();
    }
    else {
      this._buildCartoOptions();
    }
  }
  _user: IUser;

  options = null;
  center = null;


  constructor() {}

  ngOnInit() {}

  private _buildCartoOptions() {
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 8,
      center: latLng(+this._user.location.coordinates.latitude, +this._user.location.coordinates.longitude)
    };
  }

  private _recenterCarto() {
    this.center = latLng(+this._user.location.coordinates.latitude, +this._user.location.coordinates.longitude);
  }
}

