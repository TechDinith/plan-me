import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import NavbarTemplate from "./components/templates/Navbar/Navbar.template";
import DashboardPage from "./components/pages/Dashboard/Dashboard.page";
import ProjectDetailsPage from "./components/pages/ProjectDetails/ProjectDetails.page";
import SignInPage from "./components/pages/SignIn/SignIn.page";
import SignUpPage from "./components/pages/SignUp/SignUp.page";
import CreateProjectPage from "./components/pages/CreateProject/CreateProject.page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarTemplate />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/create" element={<CreateProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
