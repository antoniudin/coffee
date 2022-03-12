import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import Calendar from '../components/Calendar'

export default function Account() {
  
  const loggedUser = true

  const unavailableDays=[1]

  return (
      <div className="providerMainPage">
        {loggedUser && <ProviderNavbar/>}
        <div className="providerContent">
          <ProviderTopNavbar/>         
          
          <Calendar unavailableDays={unavailableDays}/>

        </div>
    </div>
  )
}
