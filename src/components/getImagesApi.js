import React from 'react'
import axios from 'axios'

const API_KEY = '19320063-cda7f2d635216fb573107b42d'

export const getImages = async (searchQuery, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`
  )
  return response.data.hits
}
