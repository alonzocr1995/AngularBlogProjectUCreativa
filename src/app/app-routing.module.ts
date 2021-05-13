import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPageComponent } from 'src/card-page/card-page/card-page.component';
import { EachPostModule } from 'src/each-post/each-post.module';
import { EachPostComponent } from 'src/each-post/each-post/each-post.component';
import { FormPageComponent } from 'src/formComponents/form-page/form-page.component';
import { PostContainerComponent } from 'src/homeComponents/post-container/post-container.component';
import { PostPageComponent } from 'src/postPageComponents/post-page/post-page.component';
import { PostPageModule } from 'src/postPageComponents/post-page/post-page.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: PostContainerComponent },
  { path: 'form', component: FormPageComponent },
  { path: 'post', component: PostPageComponent },
  { path: 'user/:id', component: CardPageComponent },
  { path: 'post/:id', component: EachPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
