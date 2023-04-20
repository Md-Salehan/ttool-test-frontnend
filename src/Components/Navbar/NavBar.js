import React from 'react'
import './NavBar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import HomeIcon from '@mui/icons-material/Home';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import ArticleIcon from '@mui/icons-material/Article';
// import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
// import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
// import FolderIcon from '@mui/icons-material/Folder';
// import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
// import PublishIcon from '@mui/icons-material/Publish';
import {
  Link
} from "react-router-dom";
function NavBar({style}) {
  return (
    <nav style={style} className='navbar'>
      <div className='logo-container'>
        <img src='../../../images/logo.png' alt='logo' />
      </div>
      <div className='nav-link-container'>
        <Link to='/'>
          <span>Home</span>
        </Link>
        <Link to='/news'>
          <span>News</span>
        </Link>
        <Link to='/glossary'>
          <span>Glossary</span>
        </Link>
        <Link to='/glossary'>
          <span>Learn</span>
        </Link>
        <Link to='/submit'>
          <span>Submit</span>
        </Link>
        {/* <Link to='/login'>
          <span>Login</span>
        </Link>
        <Link to='/register'>
          <span>Register</span>
        </Link> */}
      </div>
    </nav>
  )
}

export default NavBar