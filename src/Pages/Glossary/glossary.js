import React, { useEffect, useState } from 'react'
import './glossary.css'
import NavBar from '../../Components/Navbar/NavBar'
import Footer from '../../Components/Footer/footer'
import SearchBar from '../../Components/SearchBar/searchBar'
import GlossaryTable from '../../Components/GlossaryTable/glossaryTable'
import axios from 'axios'
function glossary() {
  const [glossaryArr, setGlossaryArr] = useState([])
  useEffect(() => {
    axios.get("https://ttool-test.onrender.com/api/glossary/all").then((response) => {
        setGlossaryArr(response.data);
      }).catch((err)=>console.log(err))
    }, [])

  return (
    <div className='glossary-page'>
    <NavBar />
    <div className='glossary-table-section'>
      <div className='sb-container'>
        <SearchBar />
      </div>
      <div className='glossary-table-section'>
        <div className='glossary-table-container'>
          <div className='table-outer-border'>
            <GlossaryTable glossaryArr={glossaryArr}/>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default glossary