import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { Overlay, ModalContainer } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
  render () {
    return createPortal(
      <Overlay>
        <ModalContainer>{this.props.children}</ModalContainer>
      </Overlay>,
      modalRoot
    )
  }
}

export default Modal
