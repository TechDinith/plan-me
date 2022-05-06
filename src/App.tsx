import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import NavbarTemplate from "./components/templates/Navbar/Navbar.template";
import DashboardPage from "./components/pages/Dashboard/Dashboard.page";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarTemplate />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
