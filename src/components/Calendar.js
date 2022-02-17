import React from 'react'
import Button from './Button'

export default function Calendar(props) {
  
  const days = [
    
    {day:29, avaliable:false},
    {day:30, avaliable:false},
    {day:31, avaliable:false},
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

  const today = 1

  const events = [
    {id:1, day:2, providerId:1, consumerId:2, start:'5', end:'6', time:'pm', type:'meeting'},
    {id:2, day:2, providerId:1, consumerId:2, start:'4', end:'5', time:'pm', type:'phonecall'},
    {id:3, day:6, providerId:1, consumerId:2, start:'8', end:'9', time:'am', type:'consultation'}
  ]

  function tooltipBuilder(eventId){
    const event = events.find(event=>event.id==eventId)
    const result = event.type + " from " + event.start + event.time + " to " + event.end + event.time
    return result
  }
  
  
  function findEvent (day) {
    let activeEvents=[]
    events.forEach(event=> {
        if (event.day==day) activeEvents.push(event)
    })
    return activeEvents
  }
  
  return <div className="calendar">
      {days.map(obj=> 
        <div className={`cell ${obj.day>today && obj.avaliable ? 'activeCell':null}`}>
            {obj.day}
            <div className="events">    
            {findEvent(obj.day).map(event=> 
                <div className="event" title={tooltipBuilder(event.id)} key={event.id}></div>
                )}
            </div>
        </div>
      )}
  </div>
}