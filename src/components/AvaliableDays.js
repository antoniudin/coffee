import React from 'react'
import { useState } from 'react'

export default function AvaliableDays() {
  
    const loggedUser = ''
    
    const [week, setWeek] = useState([
        {
            value:'Sunday',
            avaliable:false,
            gaps: [9,8]
            },
            {
            value:'Monday',
            avaliable:true,
            gaps: []
            },
            {
            value:'Tuesday',
            avaliable:true,
            gaps: []
            },
            {
            value:'Wednesday',
            avaliable:true,
            gaps: []
            },
            {
            value:'Thursday',
            avaliable:true,
            gaps: []
            },
            {
            value:'Friday',
            avaliable:true,
            gaps: []
            },
            {
            value:'Saturday',
            avaliable:false,
            gaps: []
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
    
  
    return (
    <div className="">
        {week.map(day=> 
            <div>
            <input type="checkbox" onChange={()=>handleDay(day.value)} id={day.value} name={day.value} value={day.value} checked={day.avaliable}/>
            <label htmlFor={day.value}>{day.value}</label>

            <div className="timeFrames">
            <button>+</button>
                {day.gaps.map(frame => 
                    <div>{frame}</div>
                    )}
                
                <button>del</button>
            </div>

            </div>
            )}
            <button className="" onClick={()=>handlePrint()}>Save</button>
    </div>
  )
}
