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

        <div className='container mt-5'>
          <div className='row border-top border-right'>
          <div className='col-md-3 p-0'>
            
            <div className='filter-maindiv border-right border-left border-bottom'>
              <h3>Filter</h3>
            <FilterSection selectedTags={selectedTags} setSelectedTags={setSelectedTags}
                      selectedPmodle={selectedPmodle} setSelectedPmodle={setSelectedPmodle}
                    />
            </div>
          </div>
          <div className='col-md-9 p-0'>
            <div>
            <ResultsSection selectedTags={selectedTags} 
          productsArr={productsArr} 
          selectedPmodle={selectedPmodle}
          />
            </div>
          </div>
          </div>
        </div>
        
        
        <Footer />
    </div>
  )
}

export default Home