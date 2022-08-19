import React, { Component } from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { ImageErrorView } from '../ImageErrorView/ImageErrorView'

export class ImageGallery extends Component {
  state = {
    images: [],
    error: false,
    status: 'idle'
  }

  componentDidUpdate (prevProps, prevState) {
    const prevTag = prevProps.imageTag
    const nextTag = this.props.imageTag

    if (prevTag !== nextTag) {
      this.setState({ status: 'pending' })

      fetch(
        `https://pixabay.com/api/?key=19320063-cda7f2d635216fb573107b42d&q=${nextTag}&image_type=photo`
      )
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(
            new Error(`No images were found with tags ${nextTag}`))
        })
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' })
        )
        .catch(error => this.setState({ error, status: 'rejected' }))
    }
  }

  render () {
    const { images, error, status } = this.state

    if (status === 'idle') {
      return <p>Введіть пошуковий запит</p>
    }

    if (status === 'pending') {
      return <p>Loading...</p>
    }

    if (status === 'rejected') {
      return <ImageErrorView message={error.message} />
    }

    if (status === 'resolved') {
      return (
        <ul class='gallery'>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              picture={image.previewURL}
              tags={image.tags}
            />
          ))}
        </ul>
      )
    }
  }
}
