import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Pastorsdesk from "./pages/pastorsdesk";
import Construction from "./pages/construction";
import Payments from "./pages/payments";
import Media from "./pages/media";
import Fellowship from "./pages/the-fellowship";

import './styles/global.css';

function App() {
  // const location = useLocation();
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/pastorsdesk" element={<Pastorsdesk />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/media" element={<Media />} />
          <Route path="/the-fellowship" element={<Fellowship />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;