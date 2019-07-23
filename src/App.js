import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "../src/components/Header/Header.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
       <Body />
    </div>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
    </div>
    
  );
}

export default App;
