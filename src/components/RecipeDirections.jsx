import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const RecipeDirections = () => {
  return (
    <div>
      <div className='recipe__directions'>
        <h2 className='heading--2'>How to cook it</h2>
        <p className='recipe__directions-text'>
          This recipe was carefully designed and tested by
          <span className='recipe__publisher'>The Pioneer Woman</span>
          . Please check out directions at their website.
        </p>
        <a
          className='btn--small recipe__btn'
          href='/'
          target='_blank'
        >
          <span>Directions</span>
          <FaLongArrowAltRight />
        </a>
      </div>
    </div>
  )
}

export default RecipeDirections
