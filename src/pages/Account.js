import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import Calendar from '../components/Calendar'

export default function Account() {
  
  const unavailableDays=[1]

  return (
      <div className="providerMainPage">
        <ProviderNavbar/>
        <div className="providerContent">
          <ProviderTopNavbar/>         
          <Calendar unavailableDays={unavailableDays}/>
        </div>
    </div>
  )
}
