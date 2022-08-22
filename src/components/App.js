import React, { PureComponent, Component } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './Button/Button'
import * as API from './getImagesApi'
// import ImageErrorView from './ImageErrorView/ImageErrorView'

import {AppContainer} from './App.styled'

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: false
  }

  async componentDidUpdate (_, prevState) {
    const { searchQuery, page } = this.state
    const images = await API.getImages(searchQuery, page)

    const prevPage = prevState.page
    const nextPage = this.state.page

    const prevQuery = prevState.searchQuery
    const nextQuery = this.state.searchQuery

    if (prevPage !== nextPage) {
      this.setState(prevState => ({
        images: [...prevState.images, ...images]
      }))
    }

    if (prevQuery !== nextQuery) {
      this.setState({
        images: images
      })
    }
  }

  handleSearchbarSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] })
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  render () {
    const { images, isLoading } = this.state

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery images={images} />
        {images.length !== 0 && (
          <LoadMoreBtn isLoading={isLoading} handleLoadMore={this.loadMore} />
        )}

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
