import React from 'react'
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

export default ImageGallery
