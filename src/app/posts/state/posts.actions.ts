import { createAction, props } from "@ngrx/store";
import { Post } from "../../shared/models/posts.model";

export const ADD_POST_ACTION = '[Posts Page] add post';
export const UPDATE_POST_ACTION = '[Posts Page] update post';

export const addPost = createAction(
  ADD_POST_ACTION,
  props<{ post: Post }>()
)


export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
)
