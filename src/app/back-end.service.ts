import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}
  //Function 1
  saveData() {
    //Step 1 - get List of Post from Post Service
    const listOfPosts: Post[] = this.postService.getPosts();
    //Step 2 - Send List of Post to Backend
    this.http
      .put(
        'https://wallpaparazzi-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  //Function 2
  fetchData() {
    //Step 1
    this.http
      .get<Post[]>(
        'https://wallpaparazzi-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          //Step 2
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
