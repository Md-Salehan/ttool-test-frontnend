import React from 'react'
import './banner.css';
import SearchBar from '../SearchBar/searchBar';
import { TypeAnimation } from 'react-type-animation';
function Banner() {
  return (
    <div className='banner'>
      <div className='container'>
      <div className='headline_div'>
        <TypeAnimation
          sequence={[
            'TECHIE-Tools Collects & Organizes All The Best AI Tools So YOU Too Can Become Superhuman!',
            1000
          ]}
          speed={50}
          style={{ fontSize: '3.8em' }}
          repeat={0}
        />
      </div>
      <br/>
      <div className='searchBar_div'>
          <SearchBar />
      </div>
      </div>
    </div>
  )
}

export default Banner