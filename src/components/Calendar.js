import React from 'react'
import Button from './Button'

export default function Calendar(props) {
  
  const days = [
    {day:1, avaliable:false},
    {day:2, avaliable:true},
    {day:3, avaliable:true},
    {day:4, avaliable:false},
    {day:5, avaliable:true},
    {day:6, avaliable:true},
    {day:7, avaliable:true},
    {day:8, avaliable:false},
    {day:9, avaliable:true},
    {day:10, avaliable:true},
  ]
  
  const today = 2
  
  return <div className="calendar">
      {days.map(obj=> 
        <div className={`cell ${obj.day>today && obj.avaliable ? 'activeCell':null}`}>
            {obj.day}
            {}
        </div>
      )}
  </div>
}