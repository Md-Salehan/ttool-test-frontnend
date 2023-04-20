import React from 'react'
import './rightbar.css'
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import { Link } from 'react-router-dom';
function rightbar() {
  return (
    <div className='right-bar'>
        <div className='cname-box'>
            <BuildCircleOutlinedIcon className='clogo'/>
            <h2 className='cname'>
                TTOOL
            </h2>
        </div>
        <div className='options-container'>
            <Link to='/admin/category'>
                <div className='option-box'>
                    <span className='option'>Category</span>
                </div>
            </Link>
            <Link to='/admin/submission'>
                <div className='option-box'>
                    <span className='option'>Submission</span>
                </div>
            </Link>
            <Link to='/admin/tools'>
                <div className='option-box'>
                    <span className='option'>Tools</span>
                </div>
            </Link>
            <Link to='/login'>
                <div className='option-box'>
                    <span className='option'>Log out</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default rightbar