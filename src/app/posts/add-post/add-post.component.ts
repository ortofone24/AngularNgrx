import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {

  postForm!: FormGroup;

  constructor() { }


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

    console.log(this.postForm.value);
  }

}

