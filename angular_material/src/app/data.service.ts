import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  posts = new BehaviorSubject<Post[]>([]);
  posts$ = this.posts.asObservable();

  private readonly URL: string = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) {
    this.getPosts().subscribe(data => {
      this.posts.next(data)
    })
  }

  getPosts() {
    return this.http.get<Post[]>(this.URL + 'posts/')
  }

  setpost(data: Post[]) {
    this.posts.next(data);
  }

  getpost(): Post[] {
    return this.posts.getValue();
  }

  getOnePost(){
   return  this.http.get<Post[]>(this.URL + 'posts/1')
  }

  createPost(data: Post) {
    const addpost = this.getpost();
    addpost.push(data);
    this.setpost(addpost);
  }

  updatePost(post: any) {
    const uppost = this.posts.getValue().map(u => {
      return (u.id === post.id) ? post : u;
    });
    this.posts.next(uppost);
  }

  deletePost(id: number) {
    const url = this.URL + 'posts/' + id;
    return this.http.delete<any>(url);

  }




}
