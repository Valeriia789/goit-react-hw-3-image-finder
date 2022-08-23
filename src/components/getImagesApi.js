// import React from 'react'
// import axios from 'axios'

// const API_KEY = '19320063-cda7f2d635216fb573107b42d'

// export const getImages = (searchQuery, page) => {
//   fetch(
//     `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=3`
//   ).then(response => {
//     if (response.ok) {
//       return response.json()
//     }
//     return Promise.reject(
//       new Error(`No images were found for the request ${searchQuery}`)
//     )
//   }).then((response) => {
//     const images = response.hits
//     console.log(images);
//     return images})
// }

// export const getImages = async (searchQuery, page) => {
//   try {
//     const response = await axios.get(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=3`
//     )
//     return response.data.hits
//   } catch (error) {
//     return Promise.reject(
//       new Error(`No images were found for the request ${searchQuery}`)
//     )
//   }
//


// FROM App:
// import axios from 'axios'
// async componentDidMount () {
//   try {
//     this.setState({ isLoading: true })
//     const images = await API.getImages()
//     this.setState({ images, isLoading: false })
//   } catch (error) {
//     this.setState({ error: true, isLoading: false })
//     console.log(error)
//   }
// }

// async getImages () {
//   const { searchQuery, page } = this.state
//   const response = await axios.get(
//     `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`
//   )
//   return await response.data.hits
// }

// async componentDidUpdate (_, prevState) {
//   const images = await this.getImages()

//   const prevPage = prevState.page
//   const nextPage = this.state.page

//   const prevQuery = prevState.searchQuery
//   const nextQuery = this.state.searchQuery

//   if (prevQuery !== nextQuery) {
//     ;(async () => {
//       try {
//         this.setState({
//           images: images,
//           isLoading: true
//         })
//       } catch (error) {
//         return Promise.reject(new Error(`Send us a normal request`))
//       }
//     })()
//   }

//   if (prevPage !== nextPage) {
//     ;(async () => {
//       try {
//         this.setState({
//           images: [...prevState.images, ...images],
//           isLoading: true
//         })
//       } catch (error) {
//         return Promise.reject(new Error())
//       }
//     })()
//   }
// }

