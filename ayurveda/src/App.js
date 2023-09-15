import React from "react";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/ome";
// import Footer from "./components/Footer";
import Navbar1 from "./components/Navbar1";
import Home1 from "./pages/Home1";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home1 />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;