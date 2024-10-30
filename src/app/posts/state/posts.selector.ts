import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { PostsState } from "./posts.reducer";

const selectPostsState = (state: AppState) => state.postsState

export const selectPosts = createSelector(
  selectPostsState,
  (state) => state.posts
)

//interface Props {
//  id: string;
//}

//export const getPostByIdTwo = createSelector(
//  selectPostsState,
//  (state: PostsState, props: Props) => {
//    return state.posts[props.id] || null;
//  }
//);


const getPostsState = createFeatureSelector<PostsState>('postsState');

export const getPosts = createSelector(
  getPostsState,
  state => {
    return state.posts
  }
)

export const getPostById = createSelector(
  getPostsState,
  (state: PostsState, props: { id: string }) => {
    //console.log (props)
    return state.posts.find(post => post.id === props.id);
  }
);

