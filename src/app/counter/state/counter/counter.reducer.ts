import { Action, createReducer, on } from "@ngrx/store";
import { customIncrement, decrement, increment, reset } from "./counter.actions";
export interface CounterState {
  count: number
}

export const initialCounterState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialCounterState,

  on(increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      count: state.count - 1,
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      count: 0,
    }
  }),
  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      count: state.count + action.value,
    }
  })
);
