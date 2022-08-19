import React, { Component } from 'react'

export class ImageGalleryItem extends Component {


  render () {
    return (

        <li class='gallery-item'>
          <img src='' alt='' />
          <p>my image</p>
          <p>{this.props}</p>
        </li>

    )
  }
}
