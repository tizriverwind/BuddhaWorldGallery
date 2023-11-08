
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Gallery from './components/Gallery';
import ImageDetail from "./components/ImageDetail";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
//import commentsRouter from "/routes/commentsRouter";
//import imagesRouter from "/routes/imageRouter";
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [galleryImages, setGalleryImages] = useState([]) 

  useEffect(() => {
    // Fetch the image data when the component mounts
    fetch("/api/images")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setGalleryImages(data); // Update the state with the fetched image data
      })
      .catch((error) => {
        // Handel errors, but possibly using another piece of state to display an error message?
        console.error("Error fetching images:", error);
      });
  }, []);


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
