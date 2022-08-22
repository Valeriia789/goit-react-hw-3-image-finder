import React, { Component } from 'react'
import Modal from '../Modal/Modal'

class ImageGalleryItem extends Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

  render () {
    const { showModal } = this.state
    const { webformatURL, tags, largeImageURL } = this.props

    return (
      <li>
        <img src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    )
  }
}

export default ImageGalleryItem
