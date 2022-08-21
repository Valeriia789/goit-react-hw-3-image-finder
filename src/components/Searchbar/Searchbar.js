import React, { Component } from 'react'
import { toast } from 'react-toastify'

class Searchbar extends Component {
  state = {
    searchQuery: ''
  }

  handleQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.searchQuery.trim() === '') {
      toast.info('Введіть пошуковий запит')
      return
    }
    this.props.onSubmit(this.state.searchQuery)
    this.setState({ searchQuery: '' })
  }

  render () {
    return (
      <>
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type='submit'>
              <span>Search</span>
            </button>

            <input
              name='searchQuery'
              value={this.state.searchQuery}
              onChange={this.handleQueryChange}
              type='text'
              autoComplete='off'
              autoFocus
              placeholder='Search images and photos'
            />
          </form>
        </header>
      </>
    )
  }
}

export default Searchbar
