import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          {/* Login stays outside layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Wrap other routes with MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/profile/pratistha" element={<Profile />} />
            {/* Add Feed, Home, etc. here */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 