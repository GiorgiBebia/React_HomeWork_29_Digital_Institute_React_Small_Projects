import { useState } from "react";

export function ImageToggler() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleImage() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggleImage}>Hide/See</button>
      {isVisible && (
        <img
          style={{ width: "300px", height: "200px" }}
          src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_1033124-10.jpg?semt=ais_hybrid"
          alt=""
        />
      )}
    </div>
  );
}
