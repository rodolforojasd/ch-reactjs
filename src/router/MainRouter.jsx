import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navibar from '../components/Navbar/Navibar'
import Footer from '../components/Footer/Footer'
import ItemPage from '../pages/ItemPage'
import Home from '../pages/Home.jsx'
import Category from '../pages/Category.jsx'
import Cart from '../pages/Cart.jsx'

const MainRouter = () =>{
     
    return (
        <Router>
            <Navibar/>
            <Routes>
                
                <Route exact path="/" element={<Home/>} />
                <Route path="/products/:categoryId" element={<Category/>} />
                <Route path="/detail/:itemCode" element={<ItemPage/>} />
                <Route path="/cart" element={<Cart/>} />

            </Routes>
            <Footer/>
        </Router>
    )
} 

 export default MainRouter