// ImageDetail.jsx

import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ImageDetail = ({ galleryImages }) => {
  let { imageId } = useParams();
  const imageDetails = galleryImages[imageId];

  if (!imageDetails) {
    return <div>Image not found.</div>;
  }

  return (
    <div>
      <img src={imageDetails.img} alt='' />
      <p>paragraphswordssentences</p>
      {/* Add comment section here */}
    </div>
  );
};

ImageDetail.propTypes = {
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ImageDetail;
