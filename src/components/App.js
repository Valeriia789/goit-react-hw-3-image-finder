import React, { PureComponent, Component } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './Button/Button'
import * as API from './getImagesApi'
// import ImageErrorView from './ImageErrorView/ImageErrorView'

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: false
  }

  async componentDidUpdate (prevProps, prevState) {
    const { searchQuery, page } = this.state
    const images = await API.getImages(searchQuery, page)

    const prevPage = prevState.page
    const nextPage = this.state.page

    const prevQuery = prevState.searchQuery
    const nextQuery = this.state.searchQuery

    // При натисканні на кнопку Load more
    // повинна довантажуватись наступна порція зображень
    //  і рендеритися разом із попередніми. Реалізувала так:
    if (prevPage !== nextPage) {
      this.setState(prevState => ({
        images: [...prevState.images, ...images]
      }))
    }

    // при новому Query намагаюсь рендерити лише нову порцію зображень,
    // параметр per_page=3, але при першому запиті рендериться 6 зображень,
    // далі - по 3, як і має бути
    if (prevQuery !== nextQuery) {
      this.setState({
        page: 1,
        images: images
      })
    }
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
    const { images, isLoading } = this.state

    return (
      <>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery images={images} />
        {images.length !== 0 && (
          <LoadMoreBtn isLoading={isLoading} handleLoadMore={this.loadMore} />
        )}

        <ToastContainer autoClose={5000} />
      </>
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
