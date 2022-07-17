import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Fragment } from 'react/cjs/react.development'


export default function Items(props) {

    const [state, setState] = useState({
        toggle: false, 
    })
    
    const ref = useRef()
    const options = [2, 4, 6, 8]
    
    const asideClick = () => {
        //implement it later
    }


    const toggleDropdown = () => {
        const toggle = !state.toggle
        setState({...state, toggle})
    }

    const maxPosts = (value) => {
        setState({...state, max_posts: value})
        props.change(value)
        toggleDropdown()
    }

    return (
        <div className="items" onClick={()=>toggleDropdown()}>
                <div className="item flex_row">{`${props.max_posts} per page`}
                <div className="arrow" style={{transform: state.toggle? 'rotate(135deg)': 'rotate(315deg)'}}></div>
            </div>
                
            <div ref={ref} className={state.toggle? 'dropdown_list':'dropdown_list_hide'}>
                {options.map(option=>
                    <div className="option" key={option} onClick={()=>maxPosts(option)}>{`${option} per page`}</div>
                )}
            </div>
            
        </div>


  )
}
