import Header from './components/Header'
import Home from './components/Home'
import RecipeView from './components/RecipeView'
import SearchResault from './components/SearchResault'

function App() {
  return (
    <div className='container'>
      <Header />
      {/* <Home /> */}
      <SearchResault />
      <RecipeView />
    </div>
  )
}

export default App
