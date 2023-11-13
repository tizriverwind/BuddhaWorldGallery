import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/Gallery";
//import { AboutUs, Contact, Gallery } from "./pages/index";

import "./App.css";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GalleryPage />} index />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
