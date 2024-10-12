import { ImageToggler } from "./ImageToggler";
import { NumberButtons } from "./NumberButtons";
import { RandomButton } from "./RandomButton";
import { RandomColorBox } from "./RandomColorBox";
import { SayHelloComponent } from "./SayHelloComponent";
import { WidthBox } from "./WidthBox";

function App() {
  return (
    <div>
      {/* Homework 1 */}
      <WidthBox />
      {/* Homework 2 */}
      <NumberButtons />
      {/* Homework 3 */}
      <RandomButton />
      {/* Homework 4 */}
      <RandomColorBox />
      {/* Homework 5 */}
      <ImageToggler />
      {/* Homework 6 */}
      <SayHelloComponent name="Giorgi" age="25" />
      <SayHelloComponent name="Nika" age="22" />
      <SayHelloComponent name="Vasili" age="63" />
    </div>
  );
}

export default App;
