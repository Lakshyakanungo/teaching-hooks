import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [Counter2, setCounter2] = useState(0);

  // useEffect(() => {
  //   first

  //   // return () => {
  //   //   second
  //   // }
  // }, [a,b,c,d])

  useEffect(() => {
    document.title = `You clicked ${counter} times but Counter2 is :${Counter2}`;
  }, [Counter2]);

  function handleClick() {
    setCounter(counter + 1);
    if (counter % 2 == 0) setCounter2(counter);
  }

  /*
  useEffect will run some function only after our dom has been rendered

  if we dont have dependency array then useEffect will run on first render and also on every re-render
  if we have an empty dependency array then the useEffect will run only on first render

  */

  return (
    <div className="App">
      <p>Your counter value is : {counter}</p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Counter
      </button>
    </div>
  );
}

export default App;
