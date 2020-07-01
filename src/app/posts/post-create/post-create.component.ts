import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from './../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  private mode = "create";
  private postId = "string";
  private post: Post;

  constructor(public postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}


// this.route.paramMap.subscribe((paramMap: ParamMap) => {
//   if (paramMap.has("postId")) {
//     this.mode = "edit";
//     this.postId = paramMap.get('postId');
//     this.post = this.postsService.getPost(this.postId);
//   } else {
//     this.mode = "create";
//     this.postId = null;
//   }
// })