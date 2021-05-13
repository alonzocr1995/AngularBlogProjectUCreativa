// import { Observable } from 'rxjs';
// import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from '../interfaces/users.interface';
import { User } from 'src/interfaces/users.interface';
import { Post } from 'src/interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  urlUsers = `https://jsonplaceholder.typicode.com/users`;
  // urlUsers = `https://jsonplaceholder.typicode.com/users/`;

  getUser: User;

  constructor(public http: HttpClient) {}

  // public getUsers = (): Observable<any> => {
  //   try {
  //     return this.http.get(this.urlUsers).pipe();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  public getUsersHttp() {
    return this.http.get<User[]>(this.urlUsers);
  }
  public getUserById(id) {
    return this.http.get<User>(`${this.urlUsers}/${id}`);
  }
  public getUserPostsById(id) {
    return this.http.get<Post[]>(`${this.urlUsers}/${id}/posts`);
  }
}
