import React from 'react'

const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
  const pageNumber = []
  for (
    let i = 1;
    i <= Math.ceil(totalRecipes / recipesPerPage);
    i++
  ) {
    pageNumber.push(i)
  }
  return (
    <div className='pg-container'>
      <ul className='pagination'>
        {pageNumber.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
