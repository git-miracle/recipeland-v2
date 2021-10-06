import React from 'react'
import Footer from './Footer'
import ListItem from './ListItem'

const SearchResault = ({ recipes, result }) => {
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

  return (
    <div className='search-resault'>
      <ul className='results'>
        {result && (
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
            {' '}
            {result} resaults found.
          </h2>
        )}

        <li>{recipes && <ListItem recipes={recipes} />}</li>
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
