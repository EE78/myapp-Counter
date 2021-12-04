import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import Counter from "./Counter/Counter";



function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <Counter value={counter} />
        <Button text="Увеличить" fn={increase} />
        <Button text="Уменьшить" fn={decrease} />
      </div>
    </div>
  );
}

export default App;
