
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Gallery from './components/Gallery';
import ImageDetail from "./components/ImageDetail";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [galleryImages, setGalleryImages] = useState([]) 

  <div id="galleryImagesDisplay" class="galleryImages">
     <img height="400px"
      src="/src/assets/${image}"
      class="gallery-img"
      alt="aam1.jpg"


  return (
    <div className="App">
      <Router>
        <Navbar />
        <div />
        <br />
        <h1 className="title">Buddha World Gallery</h1>
        <br />
        <br />
        <Routes> 
          <Route path="/" element={<Gallery galleryImages={galleryImages} />} />
          <Route path="/image/:imageId" element={<ImageDetail galleryImages/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>

      

      <br /><br />
      <br /><br />
      <div>-- @2023 Created by Xiaolin Liu and Huiqin Hu --</div>
    </div>
  );
}




export default App;
