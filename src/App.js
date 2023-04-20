import React from 'react';
import './App.css';
import Home from './Pages/Home/home'
import ProductDetail from './Pages/ProductDeatail/productDetail'
import Submission from './Pages/Submission/submission'
import Register from './Pages/Register/register'
import Login from './Pages/Login/login'
import News from './Pages/News/news'
import Glossary from './Pages/Glossary/glossary';
import AdminSubmission from './Pages/Admin/Submission/submission';
import AdminTools from './Pages/Admin/Tools/tools';
import AdminCategory from './Pages/Admin/Category/category';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/productdetail/:productId" element={<ProductDetail />}/>
          <Route path="/submit" element={<Submission />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/glossary" element={<Glossary />}/>

          <Route path="/admin/submission" element={<AdminSubmission />}/>
          <Route path="/admin/tools" element={<AdminTools />}/>
          <Route path="/admin/category" element={<AdminCategory />}/>
          <Route path="/admin/login" element={<Login />}/>
        </Routes>
    </Router>
    {/* <Footer /> */}
    </>
  );
}

export default App;
