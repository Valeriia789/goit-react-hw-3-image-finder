import React, { Component } from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: false
  }

  componentDidUpdate (prevProps, prevState) {
    const prevTag = prevProps.imageTag
    const nextTag = this.props.imageTag

    if (prevTag !== nextTag) {
      this.setState({ loading: true, images: [] })

      fetch(
        `https://pixabay.com/api/?key=19320063-cda7f2d635216fb573107b42d&q=yellow+flowers&image_type=photo`
      )
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(
            new Error(`No images were found for the request ${nextTag}`)
          )
        })
        .then(images => this.setState({ images: images.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }))
    }
  }

  render () {
    const { images, loading, error } = this.state
    const { imageTag } = this.props

    return (
      <>
        {error && <p>Ooops...{error.message}</p>}
        {loading && <p>Loading...</p>}
        {!imageTag && <p>Введіть пошуковий запит</p>}
        {this.state.images && (
          <ul class='gallery'>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                picture={image.previewURL}
                tags={image.tags}
              />
            ))}
          </ul>
        )}
      </>
    )
  }
}
