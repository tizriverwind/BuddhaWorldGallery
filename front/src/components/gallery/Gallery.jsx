import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./gallery.css";

const Gallery = ({ galleryImages }) => {
  return (
    <div>
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((image) => (
            // Assuming `id` is a unique identifier for the image, such as MongoDB's _id
            <Link to={`/image/${image.id}`} className="single" key={image.id}>
              <img src={image.img} alt={image.name || "Image"} />
            </Link>
          ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Ensure this prop matches the identifier in your image objects
      img: PropTypes.string.isRequired,
      name: PropTypes.string,
      museum: PropTypes.string, // Include other properties as necessary
    })
  ).isRequired,
};

export default Gallery;
