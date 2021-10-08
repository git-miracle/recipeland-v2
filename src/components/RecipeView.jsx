import React, { useEffect, useState } from 'react'

const RecipeView = () => {
  const [state, setState] = useState(null)
  useEffect(() => {
    fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc4b'
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setState(data.data.recipes)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div>
      {state &&
        state.map((state) => (
          <figure class='recipe__fig'>
            <img
              src={state.image_url}
              alt={state.title}
              class='recipe__img'
            />
            <h1 class='recipe__title'>
              <span>{state.title}</span>
            </h1>
          </figure>
        ))}
    </div>
  )
}

export default RecipeView
