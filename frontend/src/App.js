// import react-router
import { Routes, Route } from "react-router";

import "./App.css";
import Home from "./pages/Home";
import { AddEmployee } from "./pages/AddEmployee";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
