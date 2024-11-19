import { createReducer, on } from "@ngrx/store"
import { User } from "../../shared/models/user.model"
import { loginSuccess, signupSuccess } from "./auth.actions"

export interface AuthState {
  user: User | null
}


export const initialState: AuthState = {
  user: null
}


export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {

    console.log(action);

    return {
      ...state,
      user: action.user
    }
  }),
  on(signupSuccess, (state, action) => {

    console.log(action);

    return {
      ...state,
      user: action.user
    }
  })
)
