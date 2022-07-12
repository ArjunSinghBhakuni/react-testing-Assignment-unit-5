import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Counter from "./Components/Counter";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <div>Click Me</div>
      <h3>Current Theme is {theme}</h3>
      <Button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </Button>

      <Counter/>
    </div>
  );
}

export default App;
