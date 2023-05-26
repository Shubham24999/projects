import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";



function App() {
  const [buttontext, setButtontext] = useState("Show Non-Fiction Books");

  const handleClick = () => {
    buttontext == "Show Non-Fiction Books"
      ? setButtontext("Show Fictional Books")
      : setButtontext("Show Non-Fiction Books");
  };
  
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handleClick}>{buttontext}</button>

      <div data-testid="conditional-container">
      {buttontext === "Show Non-Fiction Books" ? <Fiction /> : <NonFiction />}
      </div>
    </div>
  );
}

export default App;
