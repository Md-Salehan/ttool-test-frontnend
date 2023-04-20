import React, { useState } from 'react'
import './aboutSection.css'
import Smalltag from '../SmallTag/smalltag'
import { Link } from 'react-router-dom'

function aboutSection({product}) {
  const [like, setLike] = useState(false)
  const handleLike = ()=> {
    if(like){ 
      setLike(false);
    }
    else setLike(true);
  }
  console.log("xxxxx",product);
  return (
    <div className='aboutSection'>
        <div className='pd-container'>
            <img className='p-img' src={product.toolImageURL} alt=''/>
          <div className='p-detail'>
            <h2 className='p-name'>
              {product.toolName}
            </h2>
            <p className='p-desc'>{product.toolDesc}</p>
            <div className='pricing-modal-div'>
              <h3 className='lable'>Pricing Modal:</h3>
              <div className='pricing-modal'>
                <p>{product.priceModle}</p>
              </div>
            </div>
            <div className='tags-div'>
              <h3>Tags: </h3>
              {
                product.tagList.map((lable,i)=>(
                  <Smalltag lable={lable} key={i}/>
                ))
              }
            </div>

            <div className='bottom-detail'>
              <div className='left'>
                { product.toolVideoURL?
                    <Link to={product.toolVideoURL}>
                    <i className="fa-brands fa-youtube yt"></i>
                    </Link>:
                      <i className="fa-brands fa-youtube yt no-video"></i>
                }
                <Link to={product.toolURL} className='visit-link'>
                  <button className='visit-btn'>Visit name</button>
                </Link>
              </div>
              <div className='right'>
                {(!like &&<i className="fa-regular fa-heart d-like" onClick={handleLike}></i>)}
                {(like &&<i className="fa-solid fa-heart d-like" onClick={handleLike}></i>)}
                <p>2.6k</p>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default aboutSection