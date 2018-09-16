import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutingModule } from './user-routing.module'
import { ProfileComponent } from './profile/profile.component'
import { LogoutComponent } from './logout/logout.component'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, UserRoutingModule, MatSidenavModule],
  declarations: [ProfileComponent, LogoutComponent, NavigationMenuComponent],
})
export class UserModule {}
