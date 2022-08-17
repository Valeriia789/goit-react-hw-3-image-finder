import React, { Component } from 'react'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'

export const App = () => {
  return (
    <div>
      <Searchbar></Searchbar>
      <ImageGallery></ImageGallery>
    </div>
  )
}
