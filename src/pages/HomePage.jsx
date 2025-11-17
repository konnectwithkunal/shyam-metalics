import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Timeline from '../components/Timeline'
import BusinessVerticals from '../components/BusinessVerticals'
import ProductsGrid from '../components/ProductsGrid'
import GlobalPresence from '../components/GlobalPresence'
import GreenVision from '../components/GreenVision'
import CorporateSocialResponsibility from '../components/CorporateSocialResponsibility'
import Testimonials from '../components/Testimonials'
import Awards from '../components/Awards'
import Clients from '../components/Clients'
import LatestNews from '../components/LatestNews'
import SharePrice from '../components/SharePrice'
import FixedImgHome from '../components/FixedImgHome'



export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About/>
      <Timeline />
      <BusinessVerticals/>
      <ProductsGrid />
      <GlobalPresence />
      <GreenVision />
      <CorporateSocialResponsibility />
      <Awards />
      <Testimonials />
      <Clients/>
      <LatestNews />
      <SharePrice />
      <FixedImgHome />
    </>
  )
}
