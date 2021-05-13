import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageComponent } from 'src/postPageComponents/post-page/post-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [PostPageComponent],
  exports: [PostPageComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class PostPageModule {}
