import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
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
export const COUNTER_STATE_NAME = 'counterState'

/*const getCounterState = createFeatureSelector<CounterState>('counterState');*/
const getCounterState = createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

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
