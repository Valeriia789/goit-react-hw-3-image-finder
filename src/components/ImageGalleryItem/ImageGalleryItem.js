import React, { Component } from 'react'

export const ImageGalleryItem = ({ picture, tags }) => {
  return (
    <li class='gallery-item'>
      <img src={picture} alt={tags} />
    </li>
  )
}
