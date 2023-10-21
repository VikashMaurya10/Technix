import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import ComingSoon from './pages/ComingSoon'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/comming-soon' element={<ComingSoon />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App