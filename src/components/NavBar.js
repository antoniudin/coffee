import React, { useEffect } from 'react'
import '../navigation.css'
import Button from './Button'

export default function NavBar(props) {
  return (
    <div className='navbar'>
        <div className="mainIcon"></div>
        <Button text={"FAQ"} class={`button ${props.pressed==1 ? 'pressedBtn' : null}`}/>
        <Button text={"Explore creators"} class={`button ${props.pressed==2 ? 'pressedBtn' : null}`}/>
        <div className="rightButtons">
        <Button text={"Login"} class={"button"}/>
        <Button text={"Sign Up"} class={"buttonBright"}/>
        </div>
        
    </div>
  )
}
