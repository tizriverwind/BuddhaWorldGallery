import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './gallery.css';

const Gallery = ({ galleryImages }) => {
  return (
    <div className='galleryWrap'>
      {galleryImages && galleryImages.map((slide, index) => (
        <Link to={`/image/${index}`} className='single' key={index}>
          <img src={slide.img} alt='' />
        </Link>
      ))}
    </div>
  );
}

Gallery.propTypes = {
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Gallery;
