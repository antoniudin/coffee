import React from 'react'
import { useState } from 'react'
import TimeFrames from './TimeFrames'

export default function AvaliableDays() {
  
    const loggedUser = ''
    
    const [week, setWeek] = useState([
        {
            id:1,
            value:'Sunday',
            avaliable:true,
            gaps: [1],
            timeGaps:[{}]
            },
            {
            id:2,
            value:'Monday',
            avaliable:true,
            gaps: [1]
            },
            {
            id:3,
            value:'Tuesday',
            avaliable:true,
            gaps: [1]
            },
            {
            id:4,
            value:'Wednesday',
            avaliable:true,
            gaps: [1]
            },
            {
            id:5,
            value:'Thursday',
            avaliable:true,
            gaps: [1]
            },
            {
            id:6,
            value:'Friday',
            avaliable:true,
            gaps: [1]
            },
            {
            id:7,
            value:'Saturday',
            avaliable:false,
            gaps: [1]
            }
    ])

    function handlePrint () {
        console.log(week)
    }

    function handleDay (value) {
        let currentDay = week.find(day=> day.value==value)
        currentDay.avaliable=!currentDay.avaliable        
        setWeek([...week].map(object => {
            if(object.value === value) {
              return {
                ...object,
                currentDay
              }
            }
            else return object;          
        }))
    }
    
    function setTime (from, to) {
        console.log(`${from} ${to}`)
    }
  
    function addTimeFrame (id) {
        const day = week.find(day=> day.id==id)
        const newFrame = day.gaps[day.gaps.length-1]+1
        day.gaps.push(newFrame)
        setWeek([...week].map(object => {
            if(object.id === id) {
              return {
                ...object,
                day
              }
            }
            else return object;          
        }))
        //find a day, push the array of gaps
    }

    function deleteFrame (id, frame) {
        const day = week.find(day => day.id==id)
        const indexFrame = day.gaps.indexOf(frame)
        if (day.gaps.length==1) day.avaliable=false
        day.gaps.splice(indexFrame,1)
        setWeek([...week].map(object => {
            if(object.id === id) {
              return {
                ...object,
                day
              }
            }
            else return object;          
        }))
        console.log(week.find(day=> day.id==id).gaps)
    }

    return (
    <div className="">
        {week.map(day=> 
            <div className="dayFrame">
            <input type="checkbox" onChange={()=>handleDay(day.value)} id={day.value} name={day.value} value={day.value} checked={day.avaliable}/>
            <label htmlFor={day.value}>{day.value}</label>            
                {day.avaliable && day.gaps.map(frame => 
                    <div className="dayTimeFrame">
                    <TimeFrames time={(from, to)=>setTime(from, to)}/>
                    <button onClick={()=>{deleteFrame(day.id, frame)}} key={day.id}>del</button>
                    </div>
                    )}
                {day.avaliable? <button onClick={()=>addTimeFrame(day.id)}>+</button> : <p>This day is unavaliable</p>}
            </div>
            )}
            <button className="buttonBright" onClick={()=>handlePrint()}>Save</button>
    </div>
  )
}
