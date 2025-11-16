import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CompanyOverviewPage from './pages/CompanyOverviewPage'
import Leadership from './pages/Leadership'

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
