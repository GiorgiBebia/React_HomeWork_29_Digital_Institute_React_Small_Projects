import { useState } from "react";

export function WidthBox() {
  const [wiDth, setWiDth] = useState(300);

  const divSize = {
    width: `${wiDth}px`,
    height: `100px`,
    backgroundColor: "red",
  };

  function toggleClick() {
    setWiDth(wiDth + 10);
  }

  return (
    <div style={divSize}>
      <button onClick={toggleClick}>Click</button>
    </div>
  );
}
