import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import PhotosGallery from "../components/PhotosGallery";
import Footer from "../components/footer/Footer";

function GalleryPage() {
  let [photos, setPhotos] = useState([]);

  async function testBack() {
    console.log("Testing back...");
    const response = await fetch("api/buddha");
    const data = await response.json();
    console.log("Got Data!", data);

    setPhotos(data);
    console.log("Render App photos=", data);
  }

  useEffect(() => {
    console.log("App useEffect called");
    testBack();

    return () => {
      //cleanup for the effect
    };
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Buddha World Gallery</h1>
      <PhotosGallery photos={photos} />
      <Footer />
    </div>
  );
}

export default GalleryPage;

// const GalleryPage = () => {
//   return (
//     <div>
//       <Navbar />
//       <PhotosGallery />
//     </div>
//   );
// };

// export default GalleryPage;
