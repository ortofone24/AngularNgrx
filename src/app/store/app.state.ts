import { AuthState, authReducer } from "../auth/state/auth.reducer";
import { CounterState, counterReducer } from "../counter/state/counter/counter.reducer";
import { PostsState, postReducer } from "../posts/state/posts.reducer";
import { SharedState, sharedReducer } from "./shared/shared.state";


//To co wspolne dla calej aplikacji powinno byc tutaj 
export interface AppState {
  counterState: CounterState,
  postsState: PostsState,
  authState: AuthState,
  sharedState: SharedState
}

export const appReducer = {
  counterState: counterReducer,
  postsState: postReducer,
  authState: authReducer,
  sharedState: sharedReducer
}

