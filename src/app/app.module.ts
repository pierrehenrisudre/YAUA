import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { appReducers } from './store/reducers/app.reducers';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ConfigEffects } from './store/effects/config.effects';
import { UserEffects } from './store/effects/user.effects';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserCartoComponent } from './components/user-carto/user-carto.component';
import { UsersFilterPipe } from './pipes/users-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserCartoComponent,
    UsersFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ScrollingModule,
    AngularFontAwesomeModule,
    LeafletModule.forRoot(),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
