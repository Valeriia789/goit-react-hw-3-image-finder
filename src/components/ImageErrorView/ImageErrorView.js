import React from 'react'
import errorImage from './error1.jpg'

const ImageErrorView = ({ message }) => {
  return (
    <div role='alert'>
      <img src={errorImage} alt='Ooops, something went wrong' />
      <p>{message}</p>
    </div>
  )
}

export default ImageErrorView