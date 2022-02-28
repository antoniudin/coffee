import '../navigation.css'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useEffect } from 'react';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

export default function ProviderCal(props) {

    const navigate = useNavigate();
    const date = useSelector(state=>state.chosenDate)

    function handleDay () {
        navigate(`${date}`)
    }

    return (
            <div className='page'>
            <p>Your fency logo</p>

            <div className="eventContainer">
            <Calendar/>
            <button onClick={()=>handleDay()}>This day</button>
            </div>
    </div>
);
}
 
