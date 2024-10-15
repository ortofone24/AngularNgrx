import { createReducer } from "@ngrx/store";
import { Post } from "../../shared/models/posts.model"

 
export interface PostsState {
  posts: Post[];
}

export const initialPostsState: PostsState = {
  posts: [
    {
      id: '1',
      title: 'Sample title 1',
      description: 'Sample Description 1'
    },
    {
      id: '2',
      title: 'Sample title 2',
      description: 'Sample Description 2'
    }
  ]
}

export const postReducer = createReducer(
  initialPostsState,


)
