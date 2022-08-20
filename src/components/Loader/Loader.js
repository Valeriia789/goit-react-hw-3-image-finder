import React, { Component } from 'react'

export default class LoadMore extends Component {
  state = {
    page: 1
  }

  handleLoadMoreClick = e => {
    e.preventDefault()

    this.props.onHandleLoadMoreClick(this.state.page)
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  render () {
    return <button onClick={this.handleLoadMoreClick}>Show more</button>
  }
}
