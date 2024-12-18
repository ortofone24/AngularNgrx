import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../shared/models/posts.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {

  postForm!: FormGroup;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]),
      description: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(10)
        ])
    })
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description')

    if (descriptionForm?.touched && !descriptionForm.valid) {

      if (descriptionForm?.errors?.['required']) {
        return 'Description is required';
      }
      if (descriptionForm?.errors?.['minlength']) {
        return 'Description  should be minimum 10 characters';
      }
    }
    return null;
  }

  onAddPost() {
    console.log(this.postForm)
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    }

    this.store.dispatch(addPost({ post }))

    console.log(this.postForm.value);
  }

}

