import React from 'react'
import { Button } from './Button.styled'

const LoadMoreBtn = ({ isLoading, loadMore  }) => {
  return (
    <Button type='button' onClick={loadMore}>
      {isLoading ? 'Loading...' : 'Load More'}
    </Button>
  )
}

export default LoadMoreBtn
