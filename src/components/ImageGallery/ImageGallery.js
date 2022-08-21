import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images &&
        images.map(image => <ImageGalleryItem key={image.id} {...image} />)}
    </ul>
  )
}

export default ImageGallery
