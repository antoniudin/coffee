import React, {useEffect, useState} from 'react'
import FAQ from './pages/FAQ';
import MAIN from './pages/MAIN';
import Explore from './pages/Explore';
import {Routes, Route} from 'react-router-dom';
import ProviderCal from './pages/ProviderCal';

export default function App() {

  return (
    <div>
      <Routes>
      <Route path="/explore:id" element={<Explore home={'test'}/>}/>
      <Route path="/explore" element={<Explore home={'test'}/>}/>
      <Route path="/prov" element={<ProviderCal/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/" exact element={<MAIN/>}/>  
      </Routes>
    </div>
  )
}
