import React, {useEffect, useState} from 'react'
import FAQ from './pages/FAQ';
import MAIN from './pages/MAIN';
import Explore from './pages/Explore';
import {Routes, Route} from 'react-router-dom';
import ProviderCal from './pages/ProviderCal';
import ConsumerCal from './pages/ConsumerCal';
import NotFound from './pages/NotFound';
import EventForm from './components/EventForm';
import ConsumerEvent from './pages/ConsumerEvent';

export default function App() {

  const providers = [
    {id:1, link:'pashkatrick', name:'Pavel Yudin', timezone:''},
    {id:2, link:'a5hot', name: 'Anton Yudin'}
  ]

  const loggedUser = {
    id:1,
    username:'Pavel Yudin',
    link:'pashkatrick',
    logged:true,
  }

  // const loggedUser = {
  //   id:2,
  //   username:'Anton Iudin',
  //   link:'a5hot',
  //   logged:true,
  // }

  const param1 = "param1"
  const teamId = 2  

  return (
    <div>
      <Routes>
      <Route path="/explore:id" element={<Explore home={'test'}/>}/>
      <Route path="/explore" element={<Explore home={'test'}/>}/>
      {loggedUser.logged && <Route path={`/login/${loggedUser.link}`} element={<ProviderCal user={loggedUser}/>}/>}
      <Route path="/cons" element={<ConsumerCal/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      {providers.map(provider=> 
        <Route>
        <Route path={`${provider.link}`} element={<ConsumerEvent provider={provider}/>}/>
        <Route path={`/${provider.link}/:yourEvent`} element={<ConsumerCal/>}/>
        <Route path={`/${provider.link}/:yourEvent/:yourDate`} element={<EventForm/>}/>
        </Route>
        )}
      <Route path="/" exact element={<MAIN/>}/>  
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
    </div>
  )
}
