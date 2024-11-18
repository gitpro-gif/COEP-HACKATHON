import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import LoginPage from './LoginPage'
import NurseDashBoard from './NurseDashBoard/NurseDashBoard'
import Messages from './Messages'
import PatientDashBoar from './PatientDashBoar'
import Geolocation from './GeoLoaction'
import LandingPage from './LandingPage'
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<LandingPage />} />
          <Route path='/home' element ={<Home />} />
          <Route path='/page/:id' element={<PatientDashBoar />} />
          <Route path='/login' element = {<LoginPage />} />
          <Route path='/ndash' element = {<NurseDashBoard />} />
          <Route path='/msg' element = {<Messages />} />
          <Route path='/geo' element = {<Geolocation />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
