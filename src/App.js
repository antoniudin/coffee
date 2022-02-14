import React, {useEffect, useState} from 'react'
import FACTS from './components/FACTS'
import NavBar from './components/NavBar'
import Button from './components/Button'

export default function App() {
  const [users, setUsers] = useState([])
  const text="text"
  useEffect (()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUsers(json))
  }, [])
  
  return (
    <div>
    </div>
  )
}
