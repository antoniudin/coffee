import React, { useEffect, useState } from 'react'


export default function TimeFrames() {
    
  const [currenFrom, setCurrentFrom] = useState(0)
  const [currentTo, setCurrentTo] = useState(0)
  const [from, setFrom] = useState(false)
  const [to, setTo] = useState(false)

  const am = [0,15,30,45,60,75,90]
  
    function toggleFrom() {
      const currentState = !from
      setFrom(currentState)
    }

    function toggleTo() {
      const currentState = !to
      setTo(currentState)
    }

    function handleFrom (time) {
      setCurrentFrom(time)
      toggleFrom()
    }

    function handleTo (time) {
      setCurrentTo(time)
      toggleTo()
    }

    function fillTimeLine () {
      for (let i=0; i<=45; i+15) {
        am.push(i)
      }
    }

    function timeDecoder (num) {
      const hour = Math.floor((num/15)/4)
      let min = num-(hour*4*15)
      if (min==0) min=min.toString()+'0'
      const m = num>=720 ? 'pm' : 'am'; 
      return (`${hour}:${min}${m}`)
    }

    function pageClick() {
      if (from) setFrom(false)
      if (to) setTo(false)
    }

    return (
    <div className="timeFramePage" onClick={()=>pageClick()}>
    <div className="timeFrameContainer">
      <div className="timeFrameFrom">{timeDecoder(currenFrom)}
        <button onClick={()=>toggleFrom()}>-</button>
        <div className={`timeFrames ${!from? 'invisibleFrame':null}`}>
        {am.map(time=> 
          <div key={time} className={`${time==currenFrom? 'timeFrameActive' : 'timeFrame'}`} onClick={()=>handleFrom(time)}>{timeDecoder(time)}</div>
          )}
      </div>
      </div>
      <div className="timeFrameTo">{timeDecoder(currentTo)}
        <button onClick={()=>toggleTo()}>-</button>
        <div className={`timeFrames ${!to? 'invisibleFrame':null}`}>
        {am.map(time=> 
          <div key={time} className={`${time==currentTo? 'timeFrameActive' : 'timeFrame'}`} onClick={()=>handleTo(time)}>{timeDecoder(time)}</div>
          )}
        </div>
        </div>
    </div>
    </div>
  )
}
