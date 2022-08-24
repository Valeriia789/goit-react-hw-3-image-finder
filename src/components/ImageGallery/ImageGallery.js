import React from 'react'
import PropTypes from 'prop-types'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryList } from './ImageGallery.styled'

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images &&
        images.map(image => <ImageGalleryItem key={image.id} {...image} />)}
    </ImageGalleryList>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageGallery
