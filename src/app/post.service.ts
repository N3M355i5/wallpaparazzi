import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' }) //Decorator for creating Service Class
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    // new Post(
    //   'Nature',
    //   'Nature is an important and integral part of mankind. It is one of the greatest blessings for human life; however, nowadays humans fail to recognize it as one. Nature has been an inspiration for numerous poets, writers, artists and more of yesteryears. This remarkable creation inspired them to write poems and stories in the glory of it. They truly valued nature which reflects in their works even today.',
    //   'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
    //   ' test@terst.com',
    //   new Date(),
    //   5
    // ),
    // new Post(
    //   'Anonymous',
    //   'Nature is an important and integral part of mankind. It is one of the greatest blessings for human life; however, nowadays humans fail to recognize it as one. Nature has been an inspiration for numerous poets, writers, artists and more of yesteryears. This remarkable creation inspired them to write poems and stories in the glory of it. They truly valued nature which reflects in their works even today.',
    //   'https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5vbnltb3VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    //   ' test@terst.com',
    //   new Date(),
    //   2
    // ),
    // new Post(
    //   '9/11',
    //   'Nature is an important and integral part of mankind. It is one of the greatest blessings for human life; however, nowadays humans fail to recognize it as one. Nature has been an inspiration for numerous poets, writers, artists and more of yesteryears. This remarkable creation inspired them to write poems and stories in the glory of it. They truly valued nature which reflects in their works even today.',
    //   'https://www.teahub.io/photos/full/156-1562424_world-trade-center-911-wallpaper-by-jaksonstoker-9.jpg',
    //   ' test@terst.com',
    //   new Date(),
    //   0
    // ),
  ];
  //Facility 1
  getPosts() {
    return this.listOfPosts;
  }
  //Facility 2
  deletePosts(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  //Facility 3
  addPosts(post: Post) {
    this.listOfPosts.push(post);
  }
  //Facility 4
  updatePosts(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }
  //Facility 5
  getPost(index: number) {
    return this.listOfPosts[index];
  }
  //Facility 6
  likePost(index: number) {
    this.listOfPosts[index].noOfLikes += 1;
  }
  //Facility 7
  setPosts(listOfPosts: Post[]) {
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
