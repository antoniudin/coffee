import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import Calendar from '../components/Calendar'
import AvailableDays from '../components/AvailableDays'

export default function Dashboard() {
  
  const loggedUser = true

  const unavailableDays=[1]

  return (
      <div className="providerMainPage">
        {loggedUser && <ProviderNavbar/>}
        <div className="providerContent">
          <ProviderTopNavbar/>         
          
          <AvailableDays/>

        </div>
    </div>
  )
}
