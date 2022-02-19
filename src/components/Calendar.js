import React, { useEffect, useLayoutEffect, useState } from 'react'
import Button from './Button'
import { Fragment } from 'react/cjs/react.development'

export default function Calendar() {
  

  const [month, setMonth ] = useState(getMonth())
  const [year, setYear ] = useState(getYear())
  const [state, setState] = useState({
    emptyDays:[1,2,3],
    week:['S','M','T','W','T','F','S'],
    days:[1,2,3],
  })
  
  const events=[
    {id:1, day:2, providerId:1, consumerId:2, start:'5', end:'6', time:'pm', type:'meeting'},
    {id:2, day:2, providerId:1, consumerId:2, start:'4', end:'5', time:'pm', type:'phonecall'},
    {id:3, day:7, providerId:1, consumerId:2, start:'8', end:'9', time:'am', type:'consultation'}
  ]

  function getMonth() {
    const today = new Date();
    return today.getMonth()+1;
  }

  function getYear() {
    const today = new Date();
    return today.getFullYear();;
  }



  useEffect (()=> {
   
  })

  function tooltipBuilder(eventId){
    const event = events.find(event=>event.id==eventId)
    const result = event.type + " from " + event.start + event.time + " to " + event.end + event.time
    return result
  }
  
  function fillCalendar (num) {
    const days = []
    for (let i=1; i<=num; i++) {
      days.push(i)
    }
    setState({...state, days})
}

function daysInMonth (month, year) {
  weekday(month, year)
  const num = new Date(year, month, 0).getDate()
  fillCalendar(num)
}

  
  function findEvent (day) {
    let activeEvents=[]
    events.forEach(event=> {
        if (event.day==day) activeEvents.push(event)
    })
    return activeEvents
  }

  function weekday(month, year) {
    const wdays = [0,1,2,3,4,5,6];
    const d = new Date(year, month, 1)
    const emptyDays = wdays[d.getDay()];
    console.log(emptyDays)
  }

  function forwardMonth (month) {
    setMonth(month+1);
    if (month>11) {
      setYear(year+1);
      setMonth(month-11)
    }
    return month
  }

  function backwardMonth (month) {
    setMonth(month-1);
    if (month<2) {
      setYear(year-1);
      setMonth(month+11)
    }
    return month
  }


  
  
  return <Fragment>
    <button onClick={()=>backwardMonth(month)}>back</button>
    <button onClick={()=>forwardMonth(month)}>forward</button>
    <p>{month}</p>
    <p>{year}</p>

    <button onClick={()=>daysInMonth(month, year)}>How many days</button>
    {/* <button onClick={()=>weekday()}>emp</button> */}

    <div className="calendar">
    {state.week.map(day=> 
        <div className="cell">{day}</div>
        )}
      
      {state.emptyDays.map(day=> 
        <div className="cell"></div>
        )}

      {state.days.map(obj=> 
        <div className={'activeCell'}>
            {obj}
            <div className="events">    
            {findEvent(obj).map(event=> 
                <div className="event" title={tooltipBuilder(event.id)} key={event.id}></div>
                )}
            </div>
        </div>
      )}
  </div>




  </Fragment>
}