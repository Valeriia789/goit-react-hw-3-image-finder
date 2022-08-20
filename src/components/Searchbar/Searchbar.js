import React, { Component } from 'react'
import { toast } from 'react-toastify'

export class Searchbar extends Component {
  state = {
    searchQuery: '',
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
    this.props.onSearchbarSubmit(this.state.searchQuery)
    this.setState({ searchQuery: '' })
  }

  render () {
    return (
      <>
        <header class='searchbar'>
          <form class='form' onSubmit={this.handleSubmit}>
            <button type='submit' class='button'>
              <span class='button-label'>Search</span>
            </button>

            <input
              name='searchQuery'
              value={this.state.searchQuery}
              onChange={this.handleQueryChange}
              class='input'
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
