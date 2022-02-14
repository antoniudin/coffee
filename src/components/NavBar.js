import React, { useEffect, useState } from 'react'
import '../navigation.css'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

export default function NavBar(props) {
  
  const checkActive = (match, location)=> {

  }

  return (
    <div className='navbar'>
      <NavLink className="mainIcon" to='/'></NavLink>
      <NavLink className ='button' to='/faq'>FAQ</NavLink>
      <NavLink className="button" activeClassName="buttonBright" to='/explore'>Explore features</NavLink>
        <div className="rightButtons">
          <NavLink className ='button' to='/login'>Login</NavLink>
          <NavLink className ='buttonBright' to='/signup'>Sign Up</NavLink>
        </div>
    </div>
  )
}

