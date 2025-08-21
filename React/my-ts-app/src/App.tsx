// src/App.tsx
import { useState } from "react";
import Greeting from "./Greetings";   // ✅ import Greeting

// ✅ Define User type here too
type User = {
  id: number;
  name: string;
  age: number;
};

function App() {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Shanto",
    age: 27,
  });

  return (
    <div>
      <h1>TypeScript + React Basics 🚀</h1>
      <Greeting user={user} />

      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}

export default App;

