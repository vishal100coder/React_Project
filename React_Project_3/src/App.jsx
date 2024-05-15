import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-blue-100 m-4 p-6 rounded-xl mb-6">
        Tailwind Test
      </h1>
      <Card username="Chai aur vishal" btnText= "Click here" />
      <Card username="Chai aur backend" btnText="Click here" />
    </>
  );
}

export default App;
