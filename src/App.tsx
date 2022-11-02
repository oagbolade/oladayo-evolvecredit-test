import React from "react";
import "./index.css";
import Button from "./Components/Button";

function App() {
  const buttonText = "Hello Button";
  return (
    <>
      <Button>{buttonText}</Button>
      {/* <h1 className="text-3xl bg-blue-700">Hello world!</h1> */}
    </>
  );
}

export default App;
