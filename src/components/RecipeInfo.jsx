import React from 'react'
import {
  FaBlender,
  FaClipboardCheck,
  FaClipboardList,
  FaGlobe,
  FaRegClock,
  FaRegStar,
  FaRegUser,
  FaUsers,
} from 'react-icons/fa'

const RecipeInfo = ({ recipe }) => {
  return (
    <div className='recipe__top'>
      <figure className='recipe__fig'>
        <img
          src={recipe.image}
          alt={recipe.title}
          className='recipe__img'
        />
        <h1 className='recipe__title'>
          <span>{recipe.title}</span>
        </h1>
      </figure>

      <div className='recipe__details'>
        <div className='recipe__info'>
          <FaClipboardCheck className='recipe__info-icon' />
          <span className='recipe__info-data recipe__info-data--minutes'>
            {recipe.sourceName}
          </span>
        </div>
        {recipe.cuisines === [] ? (
          <div className='recipe__info'>
            <FaGlobe className='recipe__info-icon' />
            <div className='recipe__info-data '>
              {recipe.cuisines[0]}
            </div>
          </div>
        ) : (
          ''
        )}
        <div className='recipe__info'>
          <FaBlender className='recipe__info-icon' />
          <span className='recipe__info-data recipe__info-data--minutes'>
            {recipe.dishTypes}
          </span>
        </div>
        <div className='recipe__info'>
          <FaRegClock className='recipe__info-icon' />
          <span className='recipe__info-data recipe__info-data--minutes'>
            {recipe.readyInMinutes}
          </span>
          <span className='recipe__info-text'>minutes</span>
        </div>
        <div className='recipe__info'>
          <FaUsers className='recipe__info-icon' />

          <span className='recipe__info-data recipe__info-data--people'>
            {recipe.servings}
          </span>
          <span className='recipe__info-text'>servings</span>
        </div>
        <div className='recipe__favorite'>
          <button className='btn--round'>
            <FaRegStar />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeInfo
