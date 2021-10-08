import React from 'react'
const ListItem = (props) => {
  const url = 'https://forkify-api.herokuapp.com/api/v2/recipes'

  return (
    <div>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className='preview'>
          <a href={`${url}/${recipe.id}`} className='preview__link'>
            <figure className='preview__fig'>
              <img src={recipe.image_url} alt='img' />
            </figure>
            <div className='preview__date'>
              <h4 className='preview__title'>{recipe.title}</h4>
              <p className='preview__publisher'>{recipe.publisher}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default ListItem
