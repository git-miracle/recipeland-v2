import React, { useState } from 'react'

import { FaSearch } from 'react-icons/fa'

const SearchRecipe = (props) => {
  const [text, setText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(text)
    props.searchRecipe(text)
    setText('')
  }
  return (
    <form className='search' onSubmit={submitHandler}>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type='text'
        className='search__field'
        placeholder='Ingredient, dishes, keyword...'
      />
      <button className='btn search__btn'>
        <div className='search__icon'>
          {' '}
          <FaSearch />
        </div>
        <span>Search</span>
      </button>
    </form>
  )
}

export default SearchRecipe
