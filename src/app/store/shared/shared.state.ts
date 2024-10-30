import { createReducer, on } from "@ngrx/store"
import { setLoadingSpinner } from "./shared.action"

export interface SharedState {
  showLoading: boolean
}

export const initialState: SharedState = {
  showLoading: false
}


export const sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      state,
      showLoading: action.status
    }
  },
  )
)
