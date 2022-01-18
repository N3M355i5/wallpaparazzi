import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup; // ! - either it can be a null or value
  index: number = 0;
  editMode = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute //allows to work with route parameters
  ) {}

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);
        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;
        this.editMode = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      description: new FormControl(description, [
        Validators.required,
        Validators.minLength(5),
      ]),
      imagePath: new FormControl(imagePath, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    const post: Post = new Post(
      title,
      description,
      imagePath,
      'test@test.com',
      new Date(),
      0
    );

    //Calling Service
    if (this.editMode === false) this.postService.addPosts(post);
    else this.postService.updatePosts(this.index, post);

    //Navigate to Home
    this.router.navigate(['/']);
  }
}
