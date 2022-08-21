// const fetchQuery = (searchQuery, nextPage) => {
//   return fetch(
//     `https://pixabay.com/api/?key=19320063-cda7f2d635216fb573107b42d&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${nextPage}&per_page=3`
//   ).then(response => {
//     if (response.ok) {
//       return response.json()
//     }
//     return Promise.reject(
//       new Error(`No images were found with tags ${searchQuery}`)
//     )
//   })
// }


// const api = {
//   fetchQuery
// }

// export default api;