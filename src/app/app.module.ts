import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from 'src/homeComponents/users.module';
import { FormModule } from 'src/formComponents/form-page/form.module';
import { HttpClientModule } from '@angular/common/http';
import { PostPageModule } from 'src/postPageComponents/post-page/post-page.module';
import { FormService } from 'src/formComponents/form.service';
import { CardPageModule } from 'src/card-page/card-page.module';
import { EachPostModule } from 'src/each-post/each-post.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormModule,
    HttpClientModule,
    PostPageModule,
    CardPageModule,
    EachPostModule,
  ],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
