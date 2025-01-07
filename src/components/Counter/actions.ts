import { CounterAction, CounterActionType } from "./types";

export const incrementCount = (value: number): CounterAction => ({
  type: CounterActionType.INCREMENT,
  payload: value
});

export const decrementCount = (value: number): CounterAction => ({
  type: CounterActionType.DECREMENT,
  payload: value
});

export const resetCount = (): CounterAction => ({
  type: CounterActionType.RESET
});
