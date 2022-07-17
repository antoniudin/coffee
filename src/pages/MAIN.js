import React from 'react'
import '../navigation.css'
import LoginForm from '../components/LoginForm'
import NavBar from '../components/NavBar'
import FloatButton from '../components/FloatButton'
import Portrait from '../components/Portrait'

export default function MAIN() {
return (
    <div className='page'>
            <NavBar/>
            <h1>Easy scheduling ahead.</h1>
            <h4>Accept donations. Start a membership. Sell anything you like. It's easier than you think.</h4>
            <LoginForm/>
            <p>Create your free account. No credit card required</p>
            <div className="pinkLayer"></div>
            <Portrait/>
            <FloatButton/>
    </div>
);
}
 
