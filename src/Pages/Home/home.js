import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/banner'
import FilterSection from '../../Components/FilterSection/filterSection'
import ResultsSection from '../../Components/ResultsSection/resultsSection'
import Footer from '../../Components/Footer/footer'
import NavBar from '../../Components/Navbar/NavBar'
import axios from 'axios'
function Home() {
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedPmodle, setSelectedPmodle] = useState([])
  const [productsArr, setProductsArr] = useState([])
  useEffect(() => {
    axios.get("https://ttool-test.onrender.com/api/tool/alltool").then((response) => {
      setProductsArr(response.data);
    });
  
  }, []) 
  
  return (
    <div className='home'>
        <NavBar />
        <Banner />
        <FilterSection selectedTags={selectedTags} setSelectedTags={setSelectedTags}
          selectedPmodle={selectedPmodle} setSelectedPmodle={setSelectedPmodle}
        />
        <ResultsSection selectedTags={selectedTags} 
          productsArr={productsArr} 
          selectedPmodle={selectedPmodle}
          />
        <Footer />
    </div>
  )
}

export default Home