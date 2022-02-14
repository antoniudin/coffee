import React, {useEffect, useState} from 'react'
import FAQ from './pages/FAQ';
import MAIN from './pages/MAIN';
import Explore from './pages/Explore';
import {Routes, Route} from 'react-router-dom';

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<MAIN/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
    </div>
  )
}
