import React, { useEffect, useState } from 'react'
import axios from 'axios'

import RecipeDirections from './RecipeDirections'

import RecipeInfo from './RecipeInfo'
import RecipeIngredients from './RecipeIngredients'

const RecipeView = ({ id }) => {
  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])
  // useEffect(() => {
  //   fetch(
  //     'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc4b'
  //   )
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       setState(data.data.recipes)
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     })
  // }, [])
  console.log(id)
  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      )
      const { recipe } = res.data.data
      setRecipe(recipe)
      console.log(recipe)
      const { ingredients } = res.data.data.recipe
      console.log(ingredients)
      setIngredients(ingredients)
    }
    fetchRecipe()
  }, [id])

  return (
    <div className='recipe-view'>
      <RecipeInfo recipe={recipe} />
      <RecipeIngredients ingredients={ingredients} />
      <RecipeDirections recipe={recipe} />
    </div>
  )
}

export default RecipeView
