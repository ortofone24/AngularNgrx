import { createReducer, on } from "@ngrx/store";
import { Post } from "../../shared/models/posts.model";
import { addPost, deletePost, updatePost } from "../state/posts.actions";

 
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
  on(addPost, (state, action) => {

    let post = { ...action.post }
    post.id = (state.posts.length + 1).toString()

    console.log(action)

    console.log(post)
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }),
  on(updatePost, (state, action) => {

    const updatedPosts = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    })

    return {
      ...state,
      posts: updatedPosts
    }
  }),
  on(deletePost, (state, action) => {

    const updatedPosts = state.posts.filter(post => {
      return post.id !== action.id;
    })

    return {
      ...state,
      posts: updatedPosts
    }
  })


)
