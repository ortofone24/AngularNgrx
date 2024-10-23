import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { ReactiveFormsModule } from "@angular/forms";
import { provideState } from "@ngrx/store";
import { postReducer } from "./state/posts.reducer";

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    /*loadComponent: () => import('./posts/posts-list/posts-list.component').then((c) => c.PostsListComponent),*/
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent }
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    PostsListComponent,
    AddPostComponent,
    EditPostComponent
  ],
  providers: [
    provideState('postsState', postReducer),
  ]
})

export class PostModule {

}


