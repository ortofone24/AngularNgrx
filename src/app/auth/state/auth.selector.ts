import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer"

export const AUTH_STATE_NAME = 'authState'


const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);


export const isAuthenticated = createSelector(getAuthState, state => {
  return state.user ? true : false;
}
)
