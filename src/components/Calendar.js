import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.development'

export default function Calendar(props) {
  
  const week=['S','M','T','W','T','F','S']
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  const [month, setMonth ] = useState(getMonth())
  const [year, setYear ] = useState(getYear())
  const [state, setState] = useState({
    emptyDays:[],
    days:[],
  })
  
  const events=[
    {id:1, day:2, providerId:1, consumerId:2, start:'5', end:'6', time:'pm', type:'meeting'},
    {id:3, day:2, providerId:1, consumerId:2, start:'5', end:'6', time:'pm', type:'meeting'},
    {id:4, day:7, providerId:1, consumerId:2, start:'4', end:'5', time:'pm', type:'phonecall'},
  ]

  function getMonth() {
    const today = new Date();
    return today.getMonth();
  }

  function getYear() {
    const today = new Date();
    return today.getFullYear();;
  }

  useEffect (()=> {
    daysInMonth(month, year)
  },[])

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
    return days
}

function daysInMonth (month, year) {
  const emptyDays = weekday(month, year)
  const num = new Date(year, month+1, 0).getDate()
  const days = fillCalendar(num)
  setState({...state, days, emptyDays})
}

  
  function findEvent (day) {
    let activeEvents=[]
    events.forEach(event=> {
        if (event.day==day) activeEvents.push(event)
    })
    return activeEvents
  }

  function weekday(month, year) {
    const emptyDays = []
    const wdays = [0,1,2,3,4,5,6];
    const d = new Date(year, month, 1)
    const num = wdays[d.getDay()];
    for (let i=1; i<=num; i++) {
      emptyDays.push(i)
    }
    return emptyDays
  }

  function forwardMonth (month) {
    setMonth(month+1);
    if (month>=11) {
      setYear(year+1);
      setMonth(month-11)
    }
    daysInMonth(month+1, year)
  }

  function backwardMonth (month) {
    setMonth(month-1);
    if (month<1) {
      setYear(year-1);
      setMonth(month+11)
    }
    daysInMonth(month-1, year)
  }

  function handleShowData (obj, month, year) {
    props.click(obj, month, year)
  }

  
  
  return <Fragment>
    
    <div className="calendarContainer">
    <div className="monthButtonsPanel">
      <div className="monthArrow" onClick={()=>backwardMonth(month)}>
        <div className="monthB"></div>
      </div>
      <div> {months[month]} {year}</div>
      <div className="monthArrow" onClick={()=>forwardMonth(month)}>
        <div className="monthF"></div>
      </div>
    </div>

    
    <div className="calendar">
    {week.map(day=> 
        <div className="cell weekday">{day}</div>
        )}
      
      {state.emptyDays.map(day=> 
        <div className="cell"></div>
        )}

      {state.days.map(obj=> 
        <div onClick={()=> handleShowData(obj, month, year)} className={'activeCell'}>
            {obj}
            <div className="events">    
            {findEvent(obj).map(event=> 
                <div className="event" key={event.id}>
                  <span class="tooltip">{tooltipBuilder(event.id)}</span>
                  
                </div>
                )}
            </div>
        </div>
      )}
  </div>


  </div>

  </Fragment>
}