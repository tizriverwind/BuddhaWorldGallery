import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Contact, Gallery } from "./pages/index";

import "./App.css";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} index />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
