import React, { Component } from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export class ImageGallery extends Component {
  state = {
    images: []
  }

  componentDidUpdate (prevProps, prevState) {
    const prevTag = prevProps.imageTag
    const nextTag = this.props.imageTag
    if (prevTag !== nextTag) {
      console.log('змінився імейдж')
      console.log('prevProps.imageTag', prevProps.imageTag)
      console.log('this.props.imageTag', this.props.imageTag)

      fetch(`https://pixabay.com/api/?key=19320063-cda7f2d635216fb573107b42d&q=yellow+flowers&image_type=photo`)
      .then(response => response.json())
      .then(console.log)
    }
  }

  render () {
    const { images } = this.state

    return (
      <>
        <ul class='gallery'>
          {images.map(image => (
            <ImageGalleryItem imageTag={this.props.imageTag} key={image.id} />
          ))}
        </ul>
      </>
    )
  }
}
