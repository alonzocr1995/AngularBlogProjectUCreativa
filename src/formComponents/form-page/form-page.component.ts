import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';
import { User } from 'src/interfaces/users.interface';
import { PostService } from 'src/services/post.service';
import { UsersService } from 'src/services/users.service';
import { FormService } from '../form.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent {
  public users: User[];
  public posts: Post[];
  public userId: number;
  public currentTitle: string;
  public currentBody: string;
  public currentUser: string;
  public formGroup: FormGroup = new FormGroup({
    username: new FormControl(null),
    title: new FormControl(),
    body: new FormControl(),
  });

  constructor(
    public userService: UsersService,
    public postService: PostService,
    public formService: FormService
  ) {
    const usersObservable$ = this.userService.getUsersHttp();
    usersObservable$.subscribe(
      (res) => {
        console.log('recibi usuarios:', res);
        this.users = res;
        // this.userId = res[0].id;
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
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    const postObservable$ = this.postService.getPosts();
    postObservable$.subscribe(
      (res) => {
        console.log('recibi post:', res);
        this.posts = res;
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
  onChange(val) {
    const firstUserPost = this.posts.find((post) => {
      return post.userId === +val;
    });
    console.log(firstUserPost);

    this.formGroup.patchValue({
      username: val,
      title: firstUserPost?.title,
      body: firstUserPost?.body,
    });
  }
  // onSendPost() {
  //   const postContent = {
  //     username: this.currentUser,
  //     title: this.currentTitle,
  //     // body: this.currentBody,
  //   };
  //   console.log(postContent);
  //   this.formService.addSendPost(postContent);
  //   // this.latestPost.emit(postContent);
  // }
  onSubmit() {
    try {
      const values = this.formGroup.value;
      this.postService.savePost(values).subscribe(
        (res) => {
          console.log('recibi post:', res);

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
    } catch (err) {
      console.log('soy un err', err);
    }
  }
}

// ngOnInit(): void {
//   console.log('testing');
// }
