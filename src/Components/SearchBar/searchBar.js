import React from 'react'
import './searchBar.css';
function searchBar() {
  return (
    <div className='searchBar'>
        <input type="text" name="searchTearm" placeholder='Search '/>
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default searchBar