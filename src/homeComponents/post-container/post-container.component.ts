import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/formComponents/form.service';
import { LatestPost } from 'src/interfaces/latest.interface';

import { Post } from 'src/interfaces/post.interface';
import { User } from 'src/interfaces/users.interface';
import { PostService } from 'src/services/post.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css'],
})
export class PostContainerComponent {
  public userNames: User[] = [];
  public post: Post[];

  // public userss = [1, 2, 3];

  constructor(
    public userService: UsersService,
    public postService: PostService,
    public formService: FormService
  ) {
    const usersObservable$ = this.userService.getUsersHttp();
    usersObservable$.subscribe(
      (res) => {
        this.userNames = res;
        // console.log('recibi usuarios:', this.userNames);

        // netxt
      },
      (err) => {
        console.error(err);
      },
      //error},
      () => {
        //complete
        // console.log('termine de mostrar info');
      }
    );
    ///////////////////////////////////////////
    const postObservable$ = this.postService.getPosts();
    postObservable$.subscribe(
      (res) => {
        this.post = res;
        // console.log('recibi post:', this.post);

        // netxt
      },
      (err) => {
        console.error(err);
      },
      //error},
      () => {
        //complete
        // console.log('termine de mostrar info');
      }
    );
    const newLatest = this.formService.newPost;
    this.post = this.formService.newPost;
  }
}
