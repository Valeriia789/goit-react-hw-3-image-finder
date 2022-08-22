import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
// import Modal from '../Modal/Modal'

const ImageGallery = ({ images, showModal }) => {
  return (
    <ul>
      {images &&
        images.map(image => <ImageGalleryItem key={image.id} {...image} />)}
    </ul>
  )
}

export default ImageGallery
