import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CompanyOverviewPage from './pages/CompanyOverviewPage'
import Leadership from './pages/Leadership'
import AwardsPage from './pages/AwardsPage'
import ManufacturingPage from './pages/ManufacturingPage'
import TestimonialsPage from './pages/TestimonialsPage'
import NewsEventsPage from './pages/NewsEventsPage'
import BusinessPage from './pages/BusinessPage'
import SingleProductPage from './pages/SingleProductPage'

export default function App(){
  return (
    <Router>
      <div className='bg-white min-h-screen'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/company-overview" element={<CompanyOverviewPage />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/product/:productId" element={<SingleProductPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
