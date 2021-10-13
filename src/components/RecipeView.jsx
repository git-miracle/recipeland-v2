import React, { useEffect, useState } from 'react'
import axios from 'axios'

import RecipeDirections from './RecipeDirections'

import RecipeInfo from './RecipeInfo'
import RecipeIngredients from './RecipeIngredients'
import Spinner from './Spinner'

const RecipeView = ({ id }) => {
  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const key = '1e63f927fe484e5792a61e8cfd281794'
  // const URL = 'https://api.spoonacular.com/recipes'

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          // `${URL}/${id}/information?appKey=${app_key}&includeNutrition=false`
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}&includeNutrition=false`
        )
        setRecipe(res.data)
        console.log(res.data)

        console.log(id)
        setLoading(false)
        const { extendedIngredients } = res.data
        setIngredients(extendedIngredients)
        console.log(extendedIngredients)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchRecipe()
  }, [id])

  return (
    <div className='recipe-view'>
      {loading && <Spinner />}

      {recipe && (
        <div>
          <RecipeInfo recipe={recipe} />
          <RecipeIngredients ingredients={ingredients} />
          <RecipeDirections recipe={recipe} />
        </div>
      )}
    </div>
  )
}

export default RecipeView
