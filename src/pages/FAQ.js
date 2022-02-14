import React from 'react'
import '../navigation.css'
import NavBar from '../components/NavBar'
import FACTS from '../components/FACTS'

export default function FAQ() {
  return (
    <div className='page'>
        <NavBar pressed={1}/>
        <FACTS/>
    </div>
  )
}
