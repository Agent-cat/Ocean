import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignIn from '../Pages/Signin'
import SignUp from '../Pages/Signup'
import Tourism from '../Pages/Tourism'
import Investment from '../Pages/Investment'
import Journer from '../Pages/Journer'
import Wellness from '../Pages/Wellness'
import Occasions from '../Pages/Occasions'
import Booking from '../Pages/Booking'

const Navroutes = ({ onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/purchase" element={<Investment/>} />
      <Route path="/tourism" element={<Tourism/>} />
      <Route path="/our-journey" element={<Journer/>} />
      <Route path="/wellness-centre" element={<Wellness/>} />
      <Route path="/occasions-and-meetups" element={<Occasions/>} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/signin" element={<SignIn onLogin={onLogin} />} />
      <Route path="/signup" element={<SignUp onLogin={onLogin} />} />
    </Routes>
  )
}

export default Navroutes