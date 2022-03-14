import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import AvailableDays from '../components/AvailableDays'

export default function Dashboard() {
  
  const loggedUser = true

  const unavailableDays=[1]

  return (
      <div className="providerMainPage">
        <ProviderNavbar/>
        <div className="providerContent">
          <ProviderTopNavbar/>         
          <AvailableDays/>
        </div>
    </div>
  )
}
