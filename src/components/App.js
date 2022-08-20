import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import LoadMore from './Loader/Loader'

// const BASE_URL = 'https://pixabay.com/api/'
// const API_KEY = '19320063-cda7f2d635216fb573107b42d'

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1
  }

  handleSearchbarSubmit = searchQuery => {
    this.setState({ searchQuery })
  }

  handleLoadMoreClick = page => {
    this.setState({ page })
  }

  getImages = images => {
    this.setState({ images })
  }

  render () {
    return (
      <div>
        <div>
          {/* {this.state.loading && <h2>Loading...</h2>}
          {this.state.images && <div>{this.state.images.likes}</div>} */}
        </div>
        <Searchbar onSearchbarSubmit={this.handleSearchbarSubmit} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          page={this.state.page}
          onGetImages={this.getImages}
        />
        <ToastContainer autoClose={5000} />
        <LoadMore onHandleLoadMoreClick={this.handleLoadMoreClick} />
      </div>
    )
  }
}
