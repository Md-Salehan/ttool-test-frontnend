import React, { useEffect, useState } from 'react'
import "./tools.css"

import AddTool from '../../../Components/AddTool/addTool'
import Topbar from '../../../Components/TopBar/topbar'
import Rightbar from '../../../Components/RightBar/rightbar'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import axios from 'axios'
function tools() {
  const [toolArr, setToolArr] = useState([])
  useEffect(() => {
    axios.get("https://ttool-test.onrender.com/api/tool/alltool").then((response) => {
      setToolArr(response.data);
    });
  }, []);

  const deleteItem = async (id)=>{
    await axios.delete(`https://ttool-test.onrender.com/api/tool/delete/${id}`).then((response) =>{
      console.log(response.data);
      setToolArr(toolArr.filter((item)=> item._id !== id))
    })
    console.log(`ok`);
  }

  return (
    <div className='tools-page'>
    <Rightbar />
        <div className='right-part'>
            <Topbar />
            
            <AddTool updateTable={setToolArr} />
            <div className='table'>
                <div className='header'>
                    <div className='title-box'>
                        <span className="title">S. Num</span>
                    </div>
                    <div className='title-box'>
                        <span className="title">Tool Name</span>
                    </div>
                    <div className='title-box taglist'>
                        <span className="title">Tag List</span>
                    </div>
                    <div className='title-box'>
                        <span className="title">View</span>
                    </div>
                    <div className='title-box'>
                        <span className="title">Delete</span>
                    </div>
                </div>

            <div className='table-body'> 
            {
              toolArr.map((item, index)=>(
                <div className='item-row' key={item._id}>
                <div className='content-cl'> 
                  <span>{index+1}.</span>
                </div>
                <div className='content-cl'> 
                  <span>{item.toolName}</span>
                </div>
                <div className='content-cl taglist'> 
                  <span>{item.tagList.join(", ")}</span>
                </div>

                <div className='content-cl'> 
                    <VisibilityOutlinedIcon className='eyeIcon' />
                </div>
                <div className='content-cl'> 
                    <DeleteOutlinedIcon className='deleteIcon' onClick={()=> deleteItem(item._id)}/>
                </div>
            </div>
              ))
            }
          </div>
            </div> 
        </div>
    </div>
  )
}

export default tools