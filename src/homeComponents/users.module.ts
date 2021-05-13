import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './post-container/post-container.component';
import { LatestPostComponent } from './latest-post/latest-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from 'src/formComponents/form.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [PostContainerComponent, LatestPostComponent],
  exports: [PostContainerComponent, LatestPostComponent],
  imports: [CommonModule, HttpClientModule, AppRoutingModule],
  providers: [FormService],
})
export class UsersModule {}
