import React from 'react'

const ImageGalleryItem = ({ previewURL, tags }) => {
  return (
    <li>
      <img src={previewURL} alt={tags} />
    </li>
  )
}

export default ImageGalleryItem
