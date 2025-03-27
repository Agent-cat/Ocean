import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/Signup'


import Tourism from '../Pages/Tourism'
import Investment from '../Pages/Investment'
import Journer from '../Pages/Journer'
import Wellnes from '../Pages/Wellnes'
import Occasions from '../Pages/Occasions'

const Navroutes = ({ onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/purchase" element={<Investment/>} />
      <Route path="/tourism" element={<Tourism/>} />
      <Route path="/our-journey" element={<Journer/>} />
      <Route path="/wellness-centre" element={<Wellnes/>} />
      <Route path="/occasions-and-meetups" element={<Occasions/>} />
      <Route path="/signin" element={<SignIn onLogin={onLogin} />} />
      <Route path="/signup" element={<SignUp onLogin={onLogin} />} />
    </Routes>
  )
}

export default Navroutes