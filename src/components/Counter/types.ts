export type CounterType = {
    counter: number
}
export enum CounterActionType {
    INCREMENT= "INCREMENT",
    DECREMENT = "DECREMENT",
    RESET = "RESET"

}
export type CounterAction =
  | {
      type: CounterActionType.INCREMENT;
      payload: number;
    }
  | {
      type: CounterActionType.DECREMENT;
      payload: number;
    }
  | {
      type: CounterActionType.RESET;
    };