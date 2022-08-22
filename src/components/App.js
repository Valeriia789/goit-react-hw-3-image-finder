import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './Button/Button'
import * as API from './getImagesApi'
// import ImageErrorView from './ImageErrorView/ImageErrorView'
import Modal from './Modal/Modal'

export default class App extends React.Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: false,
    showModal: false
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

  async componentDidUpdate (prevProps, prevState) {
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

  render () {
    const { images, showModal, isLoading } = this.state

    return (
      <>
        {/* <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery images={images} showModal={showModal} />
        {images.length !== 0 && <LoadMoreBtn isLoading={isLoading} handleLoadMore={this.loadMore} />} */}

        {showModal && (
          <Modal>
            <p>childrens from Modal</p>
            <button onClick={this.toggleModal}>close modal</button>
          </Modal>
        )}
        <button onClick={this.toggleModal}>open modal</button>
        <ToastContainer autoClose={5000} />
      </>
    )
  }
}
