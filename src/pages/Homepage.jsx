import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Products from '../Components/Products1'
import Products2 from '../Components/Products2'
import Slider from '../Components/Slider'
import Smallnavbar from '../Components/Smallnavbar'



const Homepage = () => {
  return (
    <div> 
        <Announcement/>
        <Navbar />
        <Smallnavbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Homepage