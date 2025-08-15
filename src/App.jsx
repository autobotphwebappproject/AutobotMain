import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/pages/Layout'
import ServiceLayout from './components/pages/ServiceLayout'
import MerchLayout from './components/pages/MerchLayout'
import ScrollToTop  from './assets/js/ScrollToTop'

import NotFound from './components/pages/main/error-page/NotFound'

// Main Page Routes
import mainRoutes from './routes/MainRoutes'
// End of Main Page Routes

// Services Page Routes
import serviceRoutes from './routes/ServiceRoutes'
// End of Services Page Routes

// Merch Page Routes
import merchRoutes from './routes/MerchRoutes';
// End of Merch Page Routes


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="*" element={<NotFound />} />
        {/* Main Page */}
        <Route path="/" element={<Layout/>}>
          {mainRoutes}
        </Route>
        {/* Service Center Page */}
        <Route path="/service-center" element={<ServiceLayout/>}>
          {/* <Route index element={<ServiceHome />} /> */}
          {serviceRoutes}
        </Route>
        {/* Merch Page */}
        <Route path="/merchant" element={<MerchLayout/>}>
          {merchRoutes}
        </Route>
      </Routes>
    </Router>
  )
}

export default App