import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ArtifactDetail from "./pages/ArtifactDetail";
import GalleryPage from "./pages/Gallery";
import Footer from "./components/footer/Footer";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<GalleryPage category="/" />} />
          {/* <Route path="/createartifact" element={<CreateArtifact />} /> */}
          <Route path={`/buddha/id/:artifactId`} element={<ArtifactDetail />} />
          {/* <Route path={`/buddha/edit/id/:dealId`} element={<EditArtifact />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
