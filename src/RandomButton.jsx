import { useState } from "react";

export function RandomButton() {
  const [number, setNumber] = useState(0);

  const buttonStyle = {
    padding: "40px",
    border: "1px solid green",
    borderRadius: "10px",
    color: "black",
    backgroundColor: "white",
  };

  function toggleButton() {
    setNumber(Math.floor(Math.random() * 101));
  }

  return (
    <div>
      <button onClick={toggleButton} style={buttonStyle}>
        {number}
      </button>
    </div>
  );
}
