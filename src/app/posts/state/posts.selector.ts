import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../app.state";
import { PostsState } from "./posts.reducer";

const selectPostsState = (state: AppState) => state.postsState

export const selectPosts = createSelector(
  selectPostsState,
  (state) => state.posts
)



const getPostsState = createFeatureSelector<PostsState>('postsState');

export const getPosts = createSelector(
  getPostsState,
  state => {
    return state.posts
  }
)

