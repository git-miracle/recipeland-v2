import React from 'react'
import logo from '../img/logo.png'
import { FaSearch, FaEdit, FaBookmark, FaSmile } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='header__logo' />
      <form className='search'>
        <input
          type='text'
          className='search__field'
          placeholder='Ingredient, dish, keyword...'
        />
        <button className='btn search__btn'>
          <div className='search__icon'>
            {' '}
            <FaSearch />
          </div>
          <span>Search</span>
        </button>
      </form>

      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <button className='nav__btn nav__btn--add-recipe'>
              <div className='nav__icon'>
                <FaEdit />
              </div>
              <span>Add recipe</span>
            </button>
          </li>
          <li className='nav__item'>
            <button className='nav__btn nav__btn--bookmarks'>
              <div className='nav__icon'>
                <FaBookmark />
              </div>
              <span>Bookmarks</span>
            </button>
            <div className='bookmarks'>
              <ul className='bookmarks__list'>
                <div className='message'>
                  <div>
                    <div>
                      <FaSmile />
                    </div>
                  </div>
                  <p>
                    No bookmarks yet. Find a nice recipe and bookmark
                    it
                  </p>
                </div>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header