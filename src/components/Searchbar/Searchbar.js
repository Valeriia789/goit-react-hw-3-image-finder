import React, { Component } from 'react'
import { toast } from 'react-toastify'

import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput
} from './Searchbar.styled'

class Searchbar extends Component {
  state = {
    searchQuery: ''
  }

  handleQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() })
  }

  handleSubmit = e => {
    e.preventDefault()
    // this.props.resetState()
    if (this.state.searchQuery.trim() === '') {
      toast.info('Введіть пошуковий запит')
      return
    }

    this.props.onSubmit(this.state.searchQuery)
    this.setState({ searchQuery: '' })
  }

  render () {
    return (
      <SearchbarContainer>
        <header>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type='submit'>
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              name='searchQuery'
              value={this.state.searchQuery}
              onChange={this.handleQueryChange}
              type='text'
              autoComplete='off'
              autoFocus
              placeholder='Search images and photos'
            />
          </SearchForm>
        </header>
      </SearchbarContainer>
    )
  }
}

export default Searchbar
