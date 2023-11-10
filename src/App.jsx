import React from "react";
import Pet from "./Pet";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const root = document.querySelector("#root");
const container = createRoot(root);
container.render(<App />);

function App() {
  return (
    <div className="App">
      <SearchParams />
    </div>
  );
}

export default App;
