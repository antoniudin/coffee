import '../navigation.css'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useEffect } from 'react';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'

export default function ProviderCal(props) {

    const date = null

    function getDate () {
        console.log(date)
    }

    useEffect (()=> {
        store.dispatch({
            type:actions.DATE_ADDED,
            payload:{
                date:'123'
            }
        })
        console.log(store.getState())
    })


    return (
            <div className='page'>
            <p>Your fency logo</p>
            <p>{props.link}</p>
            <p>You can create an event here</p>
            <p>{date}</p>

            <div className="eventContainer">
            <Calendar test={()=>getDate()}/>

            
            </div>
    </div>
);
}
 
