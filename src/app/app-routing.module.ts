import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './containers/user/user.component';

const routes: Routes = [
  { path: 'user/:id', component: UserComponent, outlet: 'userInfos' },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
