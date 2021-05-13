import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './card-page/card-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [CardPageComponent],
  exports: [CardPageComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class CardPageModule {}
