import '../navigation.css'
import Calendar from '../components/Calendar'

export default function ProviderCal(props) {

    function func () {
        console.log("test has passed")
    }

    return (
            <div className='page'>
            
            <p>Your fency logo</p>
            <p>{props.link}</p>
            <p>You can create an event here</p>
            
            <div className="calendar">
            <Calendar click={()=>func()}/>
            
            </div>
    </div>
);
}
 
