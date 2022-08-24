import React from 'react'

const API_KEY = '19320063-cda7f2d635216fb573107b42d'

const getImages = ({ searchQuery, page }) => {
  const fetchImages = fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`
  )
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(
        new Error(`No images were found for the request ${searchQuery}`)
      )
    })
    .then(result => {
      const images = result.hits
      return images
    })

  return fetchImages
}

export default getImages
