import React from 'react'
import errorImage from './error1.jpg'

const ImageErrorView = () => {
  return (
    <div role='alert'>
      <img src={errorImage} alt='' />
      <p>Ooops, something went wrong</p>
    </div>
  )
}

export default ImageErrorView
