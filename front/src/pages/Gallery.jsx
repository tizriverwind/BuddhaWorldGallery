import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import PhotosGallery from "../components/PhotosGallery";
import Footer from "../components/footer/Footer";
import SearchBar from "../components/SearchBar";

function GalleryPage() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  async function fetchPhotos() {
    console.log("Fetching photos...");
    const response = await fetch("api/buddha");
    if (!response.ok) {
      console.log("Error fetching photos", response);
      return;
    }
    const __photos = await response.json();
    console.log("Got Data!", __photos);

    setPhotos(__photos);
    console.log("Render App photos=", __photos);
  }

  useEffect(() => {
    console.log("App useEffect called");
    fetchPhotos();

    return () => {};
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Buddha World Gallery</h1>

      <SearchBar query={query} setQuery={setQuery} />
      <PhotosGallery photos={photos.filter((d) => d.dynasty.includes(query))} />
      <Footer />
    </div>
  );
}

export default GalleryPage;
