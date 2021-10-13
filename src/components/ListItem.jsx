import React from 'react'
const ListItem = (props) => {
  return (
    <div>
      {props.recipes &&
        props.recipes.map((recipe, index) => (
          <div
            key={index}
            onClick={() => props.linkId(recipe.id)}
            // props.linkId(recipe.recipe.uri.split('#recipe_').pop())

            className='preview'
          >
            <div className='preview__box'>
              <figure className='preview__fig'>
                <img src={recipe.image} alt='img' />
              </figure>
              <div className='preview__date'>
                <h4 className='preview__title'>
                  {/* {recipe.title} */}
                  {recipe.title.length > 20
                    ? recipe.title.substring(0, 25) + '...'
                    : recipe.title}
                </h4>
                {/* <p className='preview__publisher'>{recipe.source}</p>
                <p className='preview__publisher'>
                  {recipe.dishType}
                </p> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ListItem
