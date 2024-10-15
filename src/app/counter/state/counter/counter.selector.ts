import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../../app.state";
import { CounterState } from "./counter.reducer";

/*-----------------------------------------------------------*/
export const selectCounterState = (state: AppState) => state.counterState

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
)

export const selectChannelName = createSelector(
  selectCounterState,
  (state) => state.channelName
)
/*-----------------------------------------------------------*/


/*-----------------------------------------------------------*/
const getCounterState = createFeatureSelector<CounterState>('counterState');

export const getCounter = createSelector(
  getCounterState,
  state => {
    return state.count
  }
)

export const getChannelName = createSelector(
  getCounterState,
  state => {
    return state.channelName
  }
)
/*-----------------------------------------------------------*/
