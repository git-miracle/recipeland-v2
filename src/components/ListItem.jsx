import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
const ListItem = (props) => {
  const url = 'https://forkify-api.herokuapp.com/api/v2/recipes'

  return (
    <div>
      {props.recipes.map((recipe) => (
        <div
          key={recipe.id}
          onClick={() => props.linkId(recipe.id)}
          className='preview'
        >
          <div className='preview__box'>
            <figure className='preview__fig'>
              <img src={recipe.image_url} alt='img' />
            </figure>
            <div className='preview__date'>
              <h4 className='preview__title'>{recipe.title}</h4>
              <p className='preview__publisher'>{recipe.publisher}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListItem
