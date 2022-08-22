import React from 'react'
import { Button } from './Button.styled'

const LoadMoreBtn = ({ isLoading, handleLoadMore }) => {
  return (
    <Button type='button' onClick={handleLoadMore}>
      {isLoading ? 'Loading...' : 'Load More'}
    </Button>
  )
}

export default LoadMoreBtn
