import React, { PureComponent, Component } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import fetchImages from '../services'

import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './Button/Button'
import ImageErrorView from './ImageErrorView/ImageErrorView'
import Loader from './Loader/Loader'

import { AppContainer } from './App.styled'

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

    fetchImages({ searchQuery, page })
      .then(({ data }) => {
        if (prevQuery !== nextQuery) {
          this.setState({
            page: 1,
            images: [...data.hits],
            isLoading: false
          })
        }
        if (prevPage !== nextPage) {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            isLoading: false
          }))
        }
      })
      .catch((error) => {
        this.setState({error})
      })
      .finally(() => {})
  }

  // componentDidCatch (error) {
  //   this.setState({ error })
  // }

  handleSearchbarSubmit = searchQuery => {
    this.setState({ searchQuery })
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      isLoading: true,
      page: prevState.page + 1
    }))
  }

  handleResetGallery = () => {
    this.setState({
      page: 1,
      images: []
    })
  }

  render () {
    const { images, isLoading, error } = this.state

    return (
      <AppContainer>
        {error && <ImageErrorView message={'Ooops, something went wrong'} />}
        <Searchbar
          onSearchbarSubmit={this.handleSearchbarSubmit}
          onResetGallery={this.handleResetGallery}
        />
        {isLoading && <Loader />}
        <ImageGallery images={images} />
        {images.length !== 0 && (
          <LoadMoreBtn
            isLoading={isLoading}
            handleLoadMore={this.handleLoadMore}
          />
        )}
        <ToastContainer autoClose={5000} />
      </AppContainer>
    )
  }
}
