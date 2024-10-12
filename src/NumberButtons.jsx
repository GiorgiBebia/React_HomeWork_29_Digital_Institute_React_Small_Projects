import { useState } from "react";

export function NumberButtons() {
  const [first, setFirst] = useState(20);
  const [second, setSecond] = useState(64);
  const [third, setThird] = useState(33);

  return (
    <div>
      <button onClick={() => setFirst(first + 3)}>{first}</button>
      <button onClick={() => setSecond(second / 2)}>{second}</button>
      <button onClick={() => setThird(third - 5)}>{third}</button>
    </div>
  );
}
