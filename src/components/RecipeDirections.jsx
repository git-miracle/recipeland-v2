import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const RecipeDirections = ({ recipe }) => {
  return (
    <div>
      <div className='recipe__directions'>
        <h2 className='heading--2'>How to cook it</h2>
        <article className='recipe__directions-text'>
          {recipe.instructions}
        </article>
        <a
          className='btn--small recipe__btn'
          href={recipe.source_url}
          target='_blank'
          rel='noreferrer'
        >
          <span>Directions</span>
          <FaLongArrowAltRight />
        </a>
      </div>
    </div>
  )
}

export default RecipeDirections
//  This recipe was carefully designed and tested by
//           <span className='recipe__publisher'>
//             {' '}
//             {recipe.publisher}
//           </span>
//           . Please check out directions at their website.
