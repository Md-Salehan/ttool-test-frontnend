import React from 'react'
import './smalltag.css';


function smalltag({lable, bgColor, fontAwsmIcon, fontColor, iconColor, setFunc, name, index, obj}) {
  const handleClick = (e)=>{
    if(setFunc){
      if(name === "tutorial"){
        setFunc({
            ...obj,
            tagList: obj.tagList.filter((e, i)=>{
              return index !== i;
            })
        })
      }
    }
    console.log("got Click")
  }

  return (
    <div className='tags-box' style={{backgroundColor: bgColor}} onClick={handleClick}>
        <i style={fontAwsmIcon?{color: iconColor}:{display: "none"}} className={fontAwsmIcon+" icon"}></i>
        <p style={{color: fontColor}}>{lable}</p>
    </div>
  )
}

export default smalltag