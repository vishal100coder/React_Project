import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseValue = () => {
    setCounter(counter + 1);
  };
  const decreaseValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
