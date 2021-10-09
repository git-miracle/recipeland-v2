import React from 'react'
import {
  FaRegClock,
  FaRegStar,
  FaRegUser,
  FaUsers,
} from 'react-icons/fa'

const RecipeInfo = ({ recipe }) => {
  return (
    <div>
      <figure className='recipe__fig'>
        <img
          src={recipe.image_url}
          alt='Tomato'
          className='recipe__img'
        />
        <h1 className='recipe__title'>
          <span>{recipe.title}</span>
        </h1>
      </figure>

      <div className='recipe__details'>
        <div className='recipe__info'>
          <FaRegClock className='recipe__info-icon' />
          <span className='recipe__info-data recipe__info-data--minutes'>
            {recipe.cooking_time}
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

        <div className='recipe__user-generated'>
          <FaRegUser />
        </div>
        <button className='btn--round'>
          <FaRegStar />
        </button>
      </div>
    </div>
  )
}

export default RecipeInfo

//  /* <div className='recipe__info-buttons'>
//<button className='btn--tiny btn--increase-servings'>
//  <svg>
//    <use href='src/img/icons.svg#icon-minus-circle'></use>
//  </svg>
// </button>
// <button className='btn--tiny btn--increase-servings'>
//   <svg>
//     <use href='src/img/icons.svg#icon-plus-circle'></use>
//   </svg>
// </button>
// </div> */
