import { useState } from 'react'
import Header from './components/Header'
import RecipeView from './components/RecipeView'
import SearchResault from './components/SearchResault'

// https://forkify-api.herokuapp.com/v2

function App() {
  const [recipes, setRecipe] = useState(null)
  const [result, setResult] = useState('')

  const searchRecipe = (text) => {
    // setIsLoading(true)
    console.log(text)
    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${text}`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setResult(data.results)
        setRecipe(data.data.recipes)
      })
      .catch((err) => {
        console.log(err.message)
      })
    //  setIsLoading(false);
  }
  return (
    <div className='container'>
      <Header searchRecipe={searchRecipe} />
      <SearchResault recipes={recipes} result={result} />
      <RecipeView />
    </div>
  )
}

export default App
