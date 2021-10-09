import React from 'react'
import { FaCheck } from 'react-icons/fa'

const RecipeIngredients = ({ ingredients }) => {
  return (
    <div>
      <div className='recipe__ingredients'>
        <h2 className='heading--2'>Recipe ingredients</h2>
        <ul className='recipe__ingredient-list'>
          {ingredients.map((ingredient, index) => (
            <li key={index} className='recipe__ingredient'>
              <FaCheck className='ing-icon' />
              <div className='recipe__quantity'>
                {ingredient.quantity}
                <span className='recipe__unit'>
                  {ingredient.unit}{' '}
                </span>
              </div>
              <div className='recipe__description'>
                {ingredient.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecipeIngredients

/* <li className='recipe__ingredient'>
            <FaCheck className='ing-icon' />
            <div className='recipe__quantity'>
              1000<span className='recipe__unit'>g</span>
            </div>
            <div className='recipe__description'>pasta</div>
          </li>
          <li className='recipe__ingredient'>
            <FaCheck className='ing-icon' />
            <div className='recipe__quantity'>
              1000<span className='recipe__unit'>g</span>
            </div>
            <div className='recipe__description'>pasta</div>
          </li>
          <li className='recipe__ingredient'>
            <FaCheck className='ing-icon' />
            <div className='recipe__quantity'>
              1000<span className='recipe__unit'>g</span>
            </div>
            <div className='recipe__description'>pasta</div>
          </li>
          <li className='recipe__ingredient'>
            <FaCheck className='ing-icon' />
            <div className='recipe__quantity'>
              1000<span className='recipe__unit'>g</span>
            </div>
            <div className='recipe__description'>pasta</div>
          </li>
          <li className='recipe__ingredient'>
            <FaCheck className='ing-icon' />
            <div className='recipe__quantity'>
              1000<span className='recipe__unit'>g</span>
            </div>
            <div className='recipe__description'>pasta</div>
          </li>
          <li className='recipe__ingredient'>
            <FaCheck className='ing-icon' />
            <div className='recipe__quantity'>
              1000<span className='recipe__unit'>g</span>
            </div>
            <div className='recipe__description'>pasta</div>
          </li>

          <li className='recipe__ingredient'>
            <FaCheck className='ing-icon' />
            <div className='recipe__quantity'>5</div>
            <div className='recipe__description'>
              <span className='recipe__unit'>cup</span>
              cheese
            </div>
          </li> */
