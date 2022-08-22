import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { Overlay, ModalContainer } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
  componentDidMount () {
    window.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal()
    }
  }

  handleBackdropClick = e => {
    // e.currentTarget - на чому спрацював обробник подій
    // e.target - те, на чому ми клікнули

    if (e.currentTarget === e.target) {
      this.props.onCloseModal()
    }
  }

  render () {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainer>{this.props.children}</ModalContainer>
      </Overlay>,
      modalRoot
    )
  }
}

export default Modal
