import React, { useState } from "react";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/ome";
// import Footer from "./components/Footer";
import Navbar1 from "./components/Navbar1";
import Home1 from "./pages/Home1";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoLearning from "./pages/VideoLearning";
import Chatbot from "./components/Chatbot";
import Shopping from "./pages/Shopping";
function App() {
  const [botActive, setBotActive] = useState(false);
  const toggleBotStatus = () => {
    setBotActive((prev) => !prev);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route
            path="/"
            element={
              <Home1
                isbotActive={botActive}
                toggleBotStatus={toggleBotStatus}
              />
            }
          />
          <Route path="/videos" element={<VideoLearning />} />
          <Route path="/shop" element={<Shopping />} />
        </Routes>
        {/* <Footer /> */}

        {/* <Chatbot /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
