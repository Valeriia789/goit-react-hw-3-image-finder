import React, { Component } from 'react'
import axios from 'axios'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '19320063-cda7f2d635216fb573107b42d'

export class App extends Component {
  state = {
    images: []
  }
  componentDidMount () {
    fetch(
      `https://pixabay.com/api/?key=19320063-cda7f2d635216fb573107b42d&q=yellow+flowers&image_type=photo`
    )
      .then(response => response.json())
      .then(console.log)
  }

  render () {
    return (
      <div>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
      </div>
    )
  }
}
