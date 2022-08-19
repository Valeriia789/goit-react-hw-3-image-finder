import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '19320063-cda7f2d635216fb573107b42d'

export class App extends Component {
  state = {
    imageTag: '',
    // images: [],
    // loading: false
  }

  handleSearchbarSubmit = imageTag => {
    console.log(imageTag);
    this.setState({imageTag})
  }

  // componentDidMount () {
  //   this.setState({loading: true})
  //   fetch(
  //     `https://pixabay.com/api/?key=19320063-cda7f2d635216fb573107b42d&q=yellow+flowers&image_type=photo`
  //   )
  //     .then(response => response.json())
  //     .then(images => this.setState({ images: images.hits }))
  //     .finally(() => this.setState({loading: false}))
  // }

  render () {
    return (
      <div>
        <div>
          {/* {this.state.loading && <h2>Loading...</h2>}
          {this.state.images && <div>{this.state.images.likes}</div>} */}
          </div>
        <Searchbar onSearchbarSubmit={this.handleSearchbarSubmit}/>
        <ImageGallery imageTag={this.state.imageTag}/>
        <ToastContainer autoClose={5000}/>
      </div>
    )
  }
}
