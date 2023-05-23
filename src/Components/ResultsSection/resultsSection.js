import React, { useEffect, useState } from 'react'
import './resultsSection.css'
import Product from '../Product/product'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function resultsSection({selectedTags, productsArr, selectedPmodle}) {

  const [resultsArr, setResultsArr] = useState(productsArr)
  useEffect(() => { 

    setResultsArr( productsArr.filter((p)=>{
      if(selectedTags.length === 0) return true

      for(let i=0; i<selectedTags.length; i++){
        if(p.tagList.includes(selectedTags[i])){  
          if(selectedPmodle.length !== 0){
            if(selectedPmodle.includes(p.priceModle)){  
              return true;
            }else return false
          }else return true
        }else if( i === selectedTags.lenth-1) return false
        
      }
    }))
    console.log(resultsArr);
    // setResultsArr( resultsArr.filter((p)=>{
    //   if(selectedPmodle.length === 0) return true

    //   // else{
    //   //   for(let i=0; i<selectedPmodle.length; i++){
    //   //     if(p.priceModle.includes(selectedPmodle[i])){  
    //   //       return true;
    //   //     }else if( i === selectedPmodle.lenth-1) return false
    //   //   }
    //   // }
    // }))
    console.log(resultsArr);
  
  }, [selectedTags,selectedPmodle, productsArr])
  
  
  const navigate = useNavigate()

  
  return (
    <div className='resultsSection  border-bottom'>
      <div className='results'>
        {
          resultsArr.map((res,i)=>(
            <Product 
                name={res.toolName}
                key={res._id}
                description={res.toolDesc}
                pricingModel={res.priceModle}
                imageURL={res.toolImageURL}
                onClick={()=> navigate(`/productdetail/${res._id}`, {state: {productsArr, selectedTags:[]}})}
              />
          ))
        }
      </div>
    </div>
  )
}

export default resultsSection