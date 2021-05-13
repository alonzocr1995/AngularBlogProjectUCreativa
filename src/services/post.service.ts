import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/interfaces/post.interface';
import { Comments } from 'src/interfaces/comments.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public postUrl = 'https://jsonplaceholder.typicode.com/posts';
  public postByUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) {}
  public getPosts() {
    return this.http.get<Post[]>(this.postUrl);
  }
  public getPostById(id) {
    return this.http.get<Post>(`${this.postByUrl}/${id}`);
  }
  public savePost(post: Post) {
    return this.http.post<Post>(
      this.postUrl,
      {
        body: JSON.stringify({
          ...post,
          userId: +post.userId,
        }),
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
  }
  public updatePost(post: Post, id) {
    return this.http.put<Post>(
      `${this.postUrl}/${id}`,
      {
        body: JSON.stringify({
          ...post,
          userId: 200,
          title: 'updated title',
          body: 'updated body',
        }),
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
  }
  public deletePostById(id) {
    return this.http.delete<Post>(`${this.postByUrl}/${id}`);
  }
  public getPostCommentsById(id) {
    return this.http.get<Comments[]>(`${this.postUrl}/${id}/comments`);
  }
}
