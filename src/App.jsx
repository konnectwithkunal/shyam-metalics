import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import ProductsGrid from './components/ProductsGrid'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Timeline />
        <ProductsGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
