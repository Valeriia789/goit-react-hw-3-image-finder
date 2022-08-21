import React, { Component } from 'react'

const ImageGalleryItem = ({ previewURL, tags }) => {
  return (
    <li>
      <img src={previewURL} alt={tags} />
    </li>
  )
}

export default ImageGalleryItem
