import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'counter',
    /*component: CounterComponent*/
    loadComponent: () => import('./counter/counter/counter.component').then((c) => c.CounterComponent)
  },
  {
    path: 'posts',
    /*component: PostsListComponent,*/
    loadComponent: () => import('./posts/posts-list/posts-list.component').then((c) => c.PostsListComponent),
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent }
    ]
  }

];
