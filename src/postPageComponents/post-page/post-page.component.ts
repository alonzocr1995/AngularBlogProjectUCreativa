import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/interfaces/post.interface';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  public allPost: Post[];
  public postId: string;
  public postSub: string;
  public currentPost: string;
  constructor(
    public postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const postObservable$ = this.postService.getPosts();
    postObservable$.subscribe(
      (res) => {
        this.allPost = res;
        console.log('post page:', this.allPost);
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postSub = params.get('id');
    });

    this.currentPost = this.router.url;

    this.router.events.subscribe(() => {
      this.currentPost = this.router.url; // Update the value when a differe
    });
  }
}
