import { useState } from "react";

export function RandomColorBox() {
  const [bgColor, setBgColor] = useState("red");

  function toggleChangeColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
    setBgColor(randomColor);
  }

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: bgColor,
      }}
      onClick={toggleChangeColor}
    ></div>
  );
}
