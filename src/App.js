import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchResault from './components/SearchResault'
import Spinner from './components/Spinner'

function App() {
  const [recipes, setRecipe] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const app_key = '1e63f927fe484e5792a61e8cfd281794'
  const URL = 'https://api.spoonacular.com/recipes/complexSearch'

  const searchRecipe = async (text) => {
    try {
      setLoading(true)
      const res = await axios.get(
        `${URL}?apiKey=${app_key}&query=${text}&number=100`
      )

      setRecipe(res.data.results)
      console.log(res.data.results)

      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }
  return (
    <div className='container'>
      <Header searchRecipe={searchRecipe} />

      {loading ? (
        <Spinner />
      ) : (
        <SearchResault
          error={error}
          recipes={recipes}
          loading={loading}
        />
      )}
    </div>
  )
}

export default App
