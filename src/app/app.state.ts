import { CounterState, counterReducer } from "./counter/state/counter/counter.reducer";
import { PostsState, postReducer } from "./posts/state/posts.reducer";

export interface AppState {
  counterState: CounterState,
  postsState: PostsState
}

export const appReducer = {
  counterState: counterReducer,
  postsState: postReducer
}

