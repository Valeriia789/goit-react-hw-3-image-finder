import React, { PureComponent, Component } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BallTriangle } from 'react-loader-spinner'

import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './Button/Button'
import * as API from './getImagesApi'
import ImageErrorView from './ImageErrorView/ImageErrorView'

import { AppContainer } from './App.styled'

const API_KEY = '19320063-cda7f2d635216fb573107b42d'

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: false
  }

  getImages = async () => {
    const { searchQuery, page } = this.state
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`
      )
      return response.data.hits
    } catch (error) {
      return Promise.reject(
        new Error(`No images were found for the request ${searchQuery}`)
      )
    }
  }

  async componentDidUpdate (_, prevState) {
    const images = await this.getImages()

    const prevPage = prevState.page
    const nextPage = this.state.page

    const prevQuery = prevState.searchQuery
    const nextQuery = this.state.searchQuery

    if (prevPage !== nextPage) {
      this.setState(prevState => ({
        loading: true,
        images: [...prevState.images, ...images]
      }))
    }

    if (prevQuery !== nextQuery) {
      this.setState({
        loading: true,
        images: images
      })
    }
  }

  handleSearchbarSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] })
  }

  loadMore = () => {
    this.setState(prevState => ({
      loading: true,
      page: prevState.page + 1
    }))
  }

  render () {
    const { images, isLoading, error } = this.state

    return (
      <AppContainer>
        {error && <ImageErrorView message={error.message} />}
        {isLoading && <BallTriangle />}

        <Searchbar onSubmit={this.handleSearchbarSubmit} />

        <ImageGallery images={images} />
        {images.length !== 0 && (
          <LoadMoreBtn isLoading={isLoading} handleLoadMore={this.loadMore} />
        )}

        <BallTriangle />
        <ToastContainer autoClose={5000} />
      </AppContainer>
    )
  }
}

// async componentDidMount () {
//   try {
//     this.setState({ isLoading: true })
//     const images = await API.getImages()
//     this.setState({ images, isLoading: false })
//   } catch (error) {
//     this.setState({ error: true, isLoading: false })
//     console.log(error)
//   }
// }
