import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from './components/Gallery';
import ImageDetail from "./components/ImageDetail";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // Fetch the gallery images from the backend when the component mounts
    fetch("/api/images")
      .then(response => response.json())
      .then(data => {
        setGalleryImages(data); // Set the fetched images to state
      })
      .catch(error => {
        console.error('Error fetching gallery images:', error);
      });
  }, []); // Empty dependency array->this effect runs only once

  return (
    <div className="App">
      <Router>
        <Navbar />
        <h1 className="title">Buddha World Gallery</h1>
        <Routes>
          <Route path="/" element={<Gallery galleryImages={galleryImages} />} />
          <Route path="/image/:imageId" element={<ImageDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
      <div>-- © 2023 Created by Xiaolin Liu and Huiqin Hu --</div>
    </div>
  );
}

export default App;
