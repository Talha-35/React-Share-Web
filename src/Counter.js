import React, { useContext } from "react";
import { CounterContext } from "./App";
export default function Counter() {
  const { counter, increase, decrease } = useContext(CounterContext);
  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
}