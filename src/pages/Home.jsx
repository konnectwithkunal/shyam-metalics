import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Timeline from '../components/Timeline';
import ProductsGrid from '../components/ProductsGrid';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import BusinessVerticals from '../components/BusinessVerticals';
import GlobalPresence from '../components/GlobalPresence';
import GreenVision from '../components/GreenVision';
import CorporateSocialResponsibility from '../components/CorporateSocialResponsibility';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Timeline />
      <BusinessVerticals />
      <ProductsGrid />
      <GlobalPresence />
      <GreenVision />
      <CorporateSocialResponsibility />
      <Testimonials />
    </>
  );
}
