import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EachPostComponent } from './each-post/each-post.component';

@NgModule({
  declarations: [EachPostComponent],
  exports: [EachPostComponent],
  imports: [CommonModule],
})
export class EachPostModule {}
