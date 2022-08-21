const LoadMoreBtn = ({ isLoading, handleLoadMore }) => {
  return (
    <button type='button' onClick={handleLoadMore}>
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  )
}

export default LoadMoreBtn
