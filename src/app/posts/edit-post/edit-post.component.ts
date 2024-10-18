import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from '../../shared/models/posts.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit, OnDestroy {

  /*post?: Post;*/
  post: Post | undefined;
  postForm!: FormGroup
  postSubscription!: Subscription;


  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      const id = params.get('id')!;

      this.postSubscription = this.store.select(getPostById, { id }).subscribe(data => {
        this.post = data

        this.createForm()
      })
      console.log(params.get('id'))
      console.log(this.post);
    }) 
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl(this.post?.description, [
        Validators.required,
        Validators.minLength(10)
      ]),
    });
  }

  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Post = {
      id: this.post?.id,
      description,
      title
    }

    //dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }


  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe()
    }
  }
}
