import { Injectable, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';
import { User } from 'src/interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  // @Output()
  // latestPost = new EventEmitter<Post>();
  // public newUser: User[];
  public newPost = [];
  public addSendPost(val) {
    this.newPost.push(val);
    console.log(this.newPost);
  }
}
