import "./App.css";
import Greet from "./Greet";
import Counter from "./Counter";
import Timer from "./Timer";
import InputFocus from "./InputFocus";
import React from 'react';
import ThemeContext from './ThemeContext';
import ThemeDisplay from './ThemeDisplay';
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
import Parent from './Parent';
import Child from './Child';
import Clicker from "./Clicker";
import InputLogger from "./InputLogger";
import Message from "./Message";
import ItemList from "./ItemList";

function App() {
  return (
    <>
      <Greet name="Shanto" />
      {/* <Counter/> */}
      {/* <Timer/> */}
      {/* <InputFocus/> */}
      {/* <ThemeContext.Provider value="light">
      <div>
        <h1>Context Example</h1>
        <ThemeDisplay />
      </div>
    </ThemeContext.Provider> */}
    {/* <div><h1>Uncontrolled Input</h1>
    <UncontrolledInput/>
    </div> */}
    {/* <ControlledInput/> */}
    {/* <div style={{ display: 'flex', gap: '30px' }}>
      <ControlledInput />
      <UncontrolledInput />
    </div>    */}

    {/* <div>
        <Parent/>
    </div> */}

    {/* <Clicker/> */}

    {/* <InputLogger/> */}

    <Message/>
    <ItemList/>
    </>
  );
}

export default App;
