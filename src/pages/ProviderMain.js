import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'

export default function ProviderMain() {
  
  const loggedUser = true
  
  
  return (
      <div className="providerMainPage">
        {loggedUser && <ProviderNavbar/>}
        <div className="providerContent">
          <ProviderTopNavbar/>
          <div className="providerContentItem">1</div>          
          <div className="providerContentItem">2</div>          
        </div>
    </div>
  )
}
