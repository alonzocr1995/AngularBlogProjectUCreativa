import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comments } from 'src/interfaces/comments.interface';
import { Post } from 'src/interfaces/post.interface';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-each-post',
  templateUrl: './each-post.component.html',
  styleUrls: ['./each-post.component.css'],
})
export class EachPostComponent {
  public post: Post;
  public comments: Comments[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public postService: PostService
  ) {
    const postId = this.route.snapshot.params.id;
    const postObservable$ = this.postService.getPostById(postId);
    postObservable$.subscribe(
      (res) => {
        console.log('recibi post:', res);
        this.post = res;

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

    ///////////////////////////////////////////////
    const postCommentsObservable$ =
      this.postService.getPostCommentsById(postId);
    postCommentsObservable$.subscribe(
      (res) => {
        this.comments = res;
        console.log('all the coments', this.comments);
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
  deletePost() {
    const postId = this.route.snapshot.params.id;

    this.postService.deletePostById(postId).subscribe(
      (res) => {
        console.log('elimine post:', res);

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

  updatedPost() {
    const postId = this.route.snapshot.params.id;

    this.postService.updatePost(this.post, postId).subscribe(
      (res) => {
        console.log('updated post:', res);

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
