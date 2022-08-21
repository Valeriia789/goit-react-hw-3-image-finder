import axios from 'axios'

const API_KEY = '19320063-cda7f2d635216fb573107b42d'

const getImages = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=3`
    )
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(
      new Error(`No images were found with tags ${searchQuery}`)
    )
  } catch (error) {
    console.log(error)
  }
}

const api = {
  getImages
}

export default api
