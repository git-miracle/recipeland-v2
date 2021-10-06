import React from 'react'
import logo from '../img/logo.png'
import { FaEdit, FaBookmark, FaSmile } from 'react-icons/fa'
import SearchRecipe from './SearchRecipe'

const Header = (props) => {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='header__logo' />

      <SearchRecipe searchRecipe={props.searchRecipe} />
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
