import React from "react";
import { BrowserRouter } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import NavbarTemplate from "./components/templates/Navbar/Navbar.template";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarTemplate />
      </div>
    </BrowserRouter>
  );
}

export default App;
