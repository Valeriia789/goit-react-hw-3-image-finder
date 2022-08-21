import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './Button/Button'

const API_KEY = '19320063-cda7f2d635216fb573107b42d'
export default class App extends React.Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: false
  }

  componentDidMount () {
    // this.loadImages()
  }

  componentDidUpdate (prevProps, prevState) {
    const prevPage = prevState.page
    const currentPage = this.state.page

    const prevQuery = prevState.searchQuery
    const nextQuery = this.state.searchQuery

    if (prevPage !== currentPage || prevQuery !== nextQuery) {
      this.loadImages()
    }
  }

  loadImages = () => {
    const { page, searchQuery } = this.state
    this.setState({ isLoading: true })
    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=3`
      )
      .then(response => {
        this.setState(
          // { images: response.data.hits } - показується лише нова порція зображень
          prevState => ({
            images: [...prevState.images, ...response.data.hits]
          })
        )
      })
      .catch(error => this.setState({ error: error.true }))
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }

  handleSearchbarSubmit = searchQuery => {
    this.setState({ searchQuery })
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  render () {
    const { images, isLoading, error } = this.state
    console.log(images)

    return (
      <>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery images={images} />
        <LoadMoreBtn isLoading={isLoading} handleLoadMore={this.loadMore} />

        <ToastContainer autoClose={5000} />
      </>
    )
  }
}
