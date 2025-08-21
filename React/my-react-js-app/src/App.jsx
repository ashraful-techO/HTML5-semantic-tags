// src/App.jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Before update:", count); // Debug with console.log
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Debug Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;
