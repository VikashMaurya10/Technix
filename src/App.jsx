import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import ComingSoon from './pages/ComingSoon'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, [location])
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/comming-soon' element={<ComingSoon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App