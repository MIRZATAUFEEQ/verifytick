import React from 'react'
import Home from './Home'
import SliderImage from './SliderImage'
import ProductSuitCard from '../../components/ProductSuitCard/ProductSuitCard'
import CustomerStories from './CustomerStories/CustomerStories'
import HeroSection from './HeroSection/HeroSection'

const Combine = () => {
  return (
    <div>
      <Home />
      {/* <SliderImage /> */}
      <ProductSuitCard />
      <CustomerStories />
      <HeroSection />
    </div>
  )
}

export default Combine