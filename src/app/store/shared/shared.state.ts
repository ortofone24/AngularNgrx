import { createReducer, on } from "@ngrx/store"
import { setErrorMessage, setLoadingSpinner } from "./shared.action"

export interface SharedState {
  showLoading: boolean;
  errorMessage: string;
}

export const initialState: SharedState = {
    showLoading: false,
    errorMessage: ""
}


export const sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status
    }
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message
    }
  })
)
