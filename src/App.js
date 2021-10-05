import Header from './components/Header'
import RecipeView from './components/RecipeView'
import SearchResault from './components/SearchResault'

// https://forkify-api.herokuapp.com/v2

function App() {
  return (
    <div className='container'>
      <Header />
      <SearchResault />
      <RecipeView />
    </div>
  )
}

export default App
