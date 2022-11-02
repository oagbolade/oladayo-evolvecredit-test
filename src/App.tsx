import React from "react";
import "./index.css";
import Button from "./Components/Button";

function App() {
  const buttonText = "Hello Button";
  return (
    <>
      <Button color="danger" shape="rounded">
        {buttonText}
      </Button>
    </>
  );
}

export default App;
