import React, { Component } from 'react'

export class Searchbar extends Component {
  state = {
    imageTag: ''
  }

  handleTagChange = e => {
    this.setState({ imageTag: e.currentTarget.value.toLowerCase() })
  }

  handleSubmit = e => {
    e.preventDefault()

    if(this.state.imageTag.trim() === ''){
      alert('Введіть пошуковий запит')
      return;
    }
    this.props.onSearchbarSubmit(this.state.imageTag)
    this.setState({ imageTag: '' })
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
              name='imageTag'
              value={this.state.imageTag}
              onChange={this.handleTagChange}
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
