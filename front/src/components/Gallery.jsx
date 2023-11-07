import { useState } from 'react'
import PropTypes from "prop-types"

import './gallery.css'

const Gallery = ({ galleryImages }) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModel, setOpenModel] = useState(false)

  const handleOpenModel = (index) => {
    setSlideNumber(index)
    setOpenModel(true)
  }

  // Close Model
  const handleCloseModel = () => {
    setOpenModel(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModel && 
        <div className='sliderWrap'>
          <i className='bi bi-x-lg btnClose' onClick={handleCloseModel}></i>
          <i className='bi bi-chevron-left btnPrev' onClick={prevSlide}></i>
          <i className='bi bi-chevron-right btnNext' onClick={nextSlide}></i>
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModel(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )

}

Gallery.propTypes = {
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired
    })
  ).isRequired
};


export default Gallery