import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/interfaces/post.interface';
import { User } from 'src/interfaces/users.interface';
import { PostService } from 'src/services/post.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css'],
})
export class CardPageComponent {
  public user: User;
  public userPosts: Post[];

  constructor(
    public userService: UsersService,
    public postService: PostService,
    private route: ActivatedRoute
  ) {
    const userId = this.route.snapshot.params.id;

    const userPostsObservable$ = this.userService.getUserPostsById(userId);
    userPostsObservable$.subscribe(
      (res) => {
        this.userPosts = res;
        // console.log('recibi usuarios:', this.usersInfo);

        // netxt
      },
      (err) => {
        console.error(err);
      },
      //error},
      () => {
        //complete
        console.log('termine de mostrar info');
      }
    );
    const userObservable$ = this.userService.getUserById(userId);
    userObservable$.subscribe(
      (res) => {
        this.user = res;
        // console.log('recibi usuarios:', this.usersInfo);

        // netxt
      },
      (err) => {
        console.error(err);
      },
      //error},
      () => {
        //complete
        console.log('termine de mostrar info');
      }
    );
  }
}
