import React, { PureComponent, Component } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './Button/Button'
import ImageErrorView from './ImageErrorView/ImageErrorView'
import Loader from './Loader/Loader'

import { AppContainer } from './App.styled'
const API_KEY = '19320063-cda7f2d635216fb573107b42d'

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: null
  }

  componentDidUpdate (_, prevState) {
    const { searchQuery, page } = this.state

    const prevPage = prevState.page
    const nextPage = this.state.page
    const prevQuery = prevState.searchQuery
    const nextQuery = this.state.searchQuery

    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`
    )
      .then(response => response.json())
      .then(
        result => {
          if (prevQuery !== nextQuery) {
            this.setState({
              images: [...result.hits],
              isLoading: false
            })
          }
          if (prevPage !== nextPage) {
            this.setState(prevState => ({
              isLoading: false,
              images: [...prevState.images, ...result.hits]
            }))
          }
        },
        // Примітка: важливо обробляти помилки саме тут,
        // а не в блоці catch (), щоб не перехоплювати
        // виключення з помилок в самих компонентах.
        error => {
          this.setState({
            isLoading: true,
            error
          })
        }
      )
  }

  handleSearchbarSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [], isLoading: true })
  }

  loadMore = () => {
    this.setState(prevState => ({
      isLoading: true,
      page: prevState.page + 1
    }))
  }

  render () {
    const { images, isLoading, error } = this.state

    return (
      <AppContainer>
        {error && <ImageErrorView message={error.message} />}
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} />
        {images.length !== 0 && (
          <LoadMoreBtn isLoading={isLoading} loadMore={this.loadMore} />
        )}
        <ToastContainer autoClose={5000} />
      </AppContainer>
    )
  }
}
