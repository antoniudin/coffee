import React, {useEffect, useState} from 'react'
import FAQ from './pages/FAQ';
import MAIN from './pages/MAIN';
import Explore from './pages/Explore';
import {Routes, Route} from 'react-router-dom';
import ProviderCal from './pages/ProviderCal';
import ConsumerCal from './pages/ConsumerCal';
import NotFound from './pages/NotFound';

export default function App() {

  const providers = [
    {id:1, link:'pashkatrick'},
    {id:2, link:'a5hot'}
  ]

  const loggedUser = {
    id:1,
    username:'Pavel Yudin',
    link:'pashkatrick',
    logged:false,
  }

  // const loggedUser = {
  //   id:2,
  //   username:'Anton Iudin',
  //   link:'a5hot',
  //   logged:true,
  // }

  return (
    <div>
      <Routes>
      <Route path="/explore:id" element={<Explore home={'test'}/>}/>
      <Route path="/explore" element={<Explore home={'test'}/>}/>
      {loggedUser.logged && <Route path={`/login/${loggedUser.link}`} element={<ProviderCal user={loggedUser}/>}/>}
      <Route path="/cons" element={<ConsumerCal/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      {providers.map(provider=> 
        <Route path={provider.link} element={<ConsumerCal link={provider.link}/>}/>
        )}
      <Route path="/" exact element={<MAIN/>}/>  
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
    </div>
  )
}
