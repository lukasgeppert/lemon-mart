import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppMaterialModule } from '../app-material.module'
import { AuthGuard } from '../auth/auth-guard.service'
import { AuthService } from '../auth/auth.service'
import { SharedComponentsModule } from '../shared-components.module'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerComponent } from './manager.component'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { UserManagementComponent } from './user-management/user-management.component'

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    AppMaterialModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
  ],
  providers: [AuthGuard, AuthService],
})
export class ManagerModule {}
