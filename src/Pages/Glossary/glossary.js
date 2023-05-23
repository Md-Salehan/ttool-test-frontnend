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
   
    <div className=''>
    <NavBar />
    <div className=''>
    <h2 className='heading-glossary'>Glossary</h2>
      <div className='sb-container glo-searchbar mb-5 mt-2'>
      
        <SearchBar />
      </div>
      <div className='row m-0'>
        <div className='container'>
          <div>
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