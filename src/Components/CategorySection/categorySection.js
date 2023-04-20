import React, { useEffect, useState } from 'react'
import './categorySection.css'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import axios from 'axios';

function categorySection({allCategory, setAllCategory}) {



    const deleteCategory = async (id)=>{
        await axios.delete(`https://ttool-test.onrender.com/api/category/delete/${id}`).then(() => {
            console.log("category has been deleted");
        });
        setAllCategory(allCategory.filter((item)=> item._id !== id))
    }

  return (
    <div className='category-section'>
        <div className='feature-table'>
            <div className='item-box header '>
                <h2>Feature</h2>
            </div>
            <div className='category-container'>
                {
                    allCategory.filter((item)=>item.categoryType === "Feature")
                    .map((item)=>(
                        <div className='item-box' key={item._id}>
                            <span>{item.categoryName}</span>
                            <DeleteOutlinedIcon 
                                className='deleteIcon' 
                                onClick={()=>deleteCategory(item._id)}
                            />
                        </div>
                    ))
                }
                
            </div>
        </div>
        <div className='pricing-table'>
            <div className='header item-box'>
                <h2>Pricing</h2>
            </div>
            <div className='category-container'>
                {
                    allCategory.filter((item)=>item.categoryType === "Pricing")
                    .map((item)=>(
                        <div className='item-box' key={item._id}>
                            <span>{item.categoryName}</span>
                            <DeleteOutlinedIcon className='deleteIcon'
                               onClick={()=>deleteCategory(item._id)} 
                            />
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default categorySection