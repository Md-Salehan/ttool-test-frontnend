import React from 'react'
import './smalltag.css';


function smalltag({lable}) {
  return (
    <div className='tags-box'>
        <p>{lable}</p>
    </div>
  )
}

export default smalltag