import React, { useState } from 'react'
import RecipeView from './RecipeView'
import Footer from './Footer'
import ListItem from './ListItem'
import Pagination from './Pagination'

const SearchResault = ({ recipes, error }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage] = useState(12)
  const [id, setId] = useState('b3ce18c4a415f62086a858c54f2c3f19')

  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage

  const currentRecipes = recipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  )
  console.log(currentRecipes)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const linkId = (digit) => setId(digit)

  return (
    <>
      <div className='search-resault'>
        <ul className='results'>
          {error && <div className='error'>{error}</div>}

          {currentRecipes.length === 0 && (
            <h2
              style={{
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              Start by searching for a recipe
              <br /> or an ingredient. Have fun!
            </h2>
          )}

          <li>
            <ListItem linkId={linkId} recipes={currentRecipes} />
          </li>

          <Pagination
            recipesPerPage={recipesPerPage}
            totalRecipes={recipes.length}
            paginate={paginate}
          />
        </ul>

        <Footer />
      </div>
      <RecipeView id={id} />
    </>
  )
}

export default SearchResault
