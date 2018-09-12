import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material'

@NgModule({
  imports: [MatButtonModule, MatTooltipModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatTooltipModule, MatToolbarModule, MatIconModule],
  declarations: [],
})
export class MaterialModule {}
