import React from 'react'
import Home from './Home'
import ProductSuitCard from '../../components/ProductSuitCard/ProductSuitCard'
import CustomerStories from './CustomerStories/CustomerStories'
import HeroSection from './HeroSection/HeroSection'

const Combine = () => {
  return (
    <div>
      <Home />
      <ProductSuitCard />
      <CustomerStories />
      <HeroSection />
    </div>
  )
}

export default Combine