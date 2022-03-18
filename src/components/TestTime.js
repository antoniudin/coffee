import React, { useState , useRef} from 'react'
import useOutsideClick from '../services/useOutsideClick'
import { timeDecoder } from '../services/timeBuilder'

export default function TestTime(props) {
    
    const ref = useRef()

    const times = [0,15,30,45,60,75] 
    
    const [state, setToggle] = useState({
        toggle:false,
        currentTime:props.time
    })
    
    function click () {
        const result = !state.toggle
        setToggle({...state, toggle:result})
    }
    
    function setTime (time) {
        setToggle({toggle:false, currentTime:time})
        props.setTime(time)
    }

    useOutsideClick(ref, () => {
        setToggle({...state, toggle:false})
      });
    
    return (
    <div ref={ref} className="columnFrame">
        <div className={`row ${state.toggle? "activeFrame":null}`}>
            <div className="testCurrent">{timeDecoder(state.currentTime)}</div>
            <button onClick={()=>click()}>x</button>
        </div>
        
        <div className={`${state.toggle? "testFrame":"testFrameInv"}`}>
        {times.map(time=> 
            <div className={`${time==state.currentTime? "activeTime":null}`} key={time} onClick={()=>setTime(time)}>{timeDecoder(time)}</div>
            )}
        </div>
    </div>
  )
}
