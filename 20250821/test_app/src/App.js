import React, { useState, useCallback, memo } from "react";

const Increase = memo(({ onClick }) => {
  console.log("증가 컴포넌트 렌더링!!!");
  return <button onClick={onClick}>+</button>;
})

const Decrease = memo(({ onClick }) => {
  console.log("감소 컴포넌트 렌더링!!!");
  return <button onClick={onClick}>-</button>;
})

function App() {
  const [count, setCount] = useState(0);

  const increaseClick = useCallback(() => 
    setCount((prev) => prev + 1
  ), []);

  const decreaseClick = useCallback(() =>
    setCount((prev) => prev - 1
  ), []);

  return (
    <div>
      <h1>{count}</h1>
      <Increase onClick={increaseClick} />
      <Decrease onClick={decreaseClick} />
    </div>
  );
}

export default App;
