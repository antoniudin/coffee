import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.development'
import store from '../redux/store'
import * as actions from '../redux/actionTypes'

function Calendar(props) {
  
  const week=['S','M','T','W','T','F','S']
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  const currentMonth = getMonth()
  
  const [focus, setFocus ] = useState()
  const [month, setMonth ] = useState(getMonth())
  const [year, setYear ] = useState(getYear())
  const [state, setState] = useState({
    emptyDays:[],
    days:[],
  })
  
  const events=[ 
    {id:1, date:'2/2/2022', providerName:'', consumerId:2, start:'5', time:'pm', long:15},
    {id:2, date:'3/31/2022', providerName:'', consumerId:2, start:'5', time:'pm', long:15},
    {id:3, date:'2/10/2022', providerName:'', consumerId:2, start:'4', time:'pm', long:15},
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
    const result = "event" + " at " + event.start + event.time + " for " + event.long + " minutes"
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
    const currentDate = month+1+"/"+day+"/"+year
    let activeEvents=[]
    events.forEach(event=> {
        if (event.date==currentDate) activeEvents.push(event)
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
    setFocus(null)
  }

  function backwardMonth (month) {
    setMonth(month-1);
    if (month<1) {
      setYear(year-1);
      setMonth(month+11)
    }
    daysInMonth(month-1, year)
    setFocus(null)
  }

  function handleShowData (obj) {
    setFocus(obj)

    store.dispatch({
      type:actions.DATE_ADDED,
      payload:{
        date:month+'_'+year+'_'+obj
      }
  })
  console.log(store.getState())
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
        <div onClick={()=> handleShowData(obj, month, year)} className={`activeCell ${focus==obj? 'focusCell':null}`}>
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

export default Calendar