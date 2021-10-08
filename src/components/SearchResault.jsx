import React, { useState } from 'react'
import Footer from './Footer'
import ListItem from './ListItem'
import Pagination from './Pagination'

const SearchResault = ({ recipes, result }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(10)

  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = recipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  )
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className='search-resault'>
      <ul className='results'>
        {result && (
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
            {' '}
            {result} resaults found.
          </h2>
        )}

        <li>{recipes && <ListItem recipes={currentRecipes} />}</li>
        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={result}
          paginate={paginate}
        />
      </ul>

      <Footer />
    </div>
  )
}

export default SearchResault

// <div className='pagination'>
//         {/* pagination
//           <button className="btn--inline pagination__btn--prev">
//             <svg className="search__icon">
//               <use href="src/img/icons.svg#icon-arrow-left"></use>
//             </svg>
//             <span>Page 1</span>
//           </button>
//           <button className="btn--inline pagination__btn--next">
//             <span>Page 3</span>
//             <svg className="search__icon">
//               <use href="src/img/icons.svg#icon-arrow-right"></use>
//             </svg>
//           </button>
//           */}
//       </div>

// useEffect(() => {
//   fetch(
//     `https://forkify-api.herokuapp.com/api/v2/recipes?search=${text}`
//   )
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       // const { recipes } = data.data
//       console.log(data)
//       setResult(data.results)
//       setRecipe(data.data.recipes)
//     })
//     .catch((err) => {
//       console.log(err.message)
//     })
// }, [])
