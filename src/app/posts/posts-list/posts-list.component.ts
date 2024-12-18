import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/posts.model';
import { getPosts } from '../state/posts.selector';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {

  posts$!: Observable<Post[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts)
  }

  onDeletePost(id: string | undefined) {
    if (confirm("Are you sure you want to delete")) {
      console.log('delete the post');

      this.store.dispatch(deletePost({ id }))
    }
  }

}
