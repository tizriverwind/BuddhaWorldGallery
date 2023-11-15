import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PhotoGallery.css";

function PhotosGallery({ photos }) {
  console.log("👏🏻 Render PhotosGallery photos=", photos);

  function renderPhotos() {
    function renderPhoto(photo) {
      return (
        <div className="col-4" key={photo._id}>
          <div>{photo.dynasty}</div>
          <img src={photo.image} width={250} height={250} alt={photo.name} />
          <div>{photo.museum}</div>
          <div>{photo.name}</div>
          <Link
            to={`/buddha/id/${photo._id}`}
            className="btn btn-primary btn-lg"
          >
            detail page
          </Link>
        </div>
      );
    }

    return photos.map(renderPhoto);
  }

  return <div className="row">{renderPhotos()}</div>;
}

PhotosGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      dynasty: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      museum: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default PhotosGallery;
