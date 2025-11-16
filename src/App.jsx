import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import ProductsGrid from './components/ProductsGrid'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import About from './components/About'
import BusinessVerticals from './components/BusinessVerticals';
import GlobalPresence from './components/GlobalPresence';
import GreenVision from './components/GreenVision';
import CorporateSocialResponsibility from './components/CorporateSocialResponsibility'
import CompanyOverview from './components/CompanyOverview'

export default function App(){
  return (
    <div className='bg-white min-h-screen'>
      <Header />
      <main>

        <Hero />

        <Stats />
        <About/>
        <CompanyOverview />
        <Timeline />
        <BusinessVerticals/>
        <ProductsGrid />
        <GlobalPresence />
        <GreenVision />
        <CorporateSocialResponsibility />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
