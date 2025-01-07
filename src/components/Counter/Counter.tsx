import { useState } from "react";
import { counterReducer } from "./reducer";
import { initialState } from "./ininialState";
import "./actions";
import { decrementCount, incrementCount, resetCount } from "./actions";
import { useImmerReducer } from "use-immer";

const Counter = () => {
  const [state, dispatch] = useImmerReducer(counterReducer, initialState);
  const [value, setValue] = useState<number>(0);
  return (
    <div>
      {state.counter}
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(parseInt(event.target.value))}
      ></input>
      <button onClick={() => dispatch(incrementCount(value))}>+</button>
      <button onClick={() => dispatch(decrementCount(value))}>-</button>
      <button onClick={() => dispatch(resetCount())}>reset</button>
    </div>
  );
};

export default Counter;
