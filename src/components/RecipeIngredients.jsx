import React from 'react'
import { FaCheck, FaChevronRight } from 'react-icons/fa'

const RecipeIngredients = () => {
  return (
    <div>
      <div className='recipe__ingredients'>
        <h2 className='heading--2'>Recipe ingredients</h2>
        <ul className='recipe__ingredient-list'>
          <li className='recipe__ingredient'>
            <FaChevronRight className='ing-icon' />
            <div className='recipe__quantity'>
              1000<span className='recipe__unit'>g </span>
            </div>
            <div className='recipe__description'>
              pasta kd sadkls kda dlka;ldk
            </div>
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
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RecipeIngredients
