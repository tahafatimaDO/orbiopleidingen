import React, { useEffect } from "react"
import ReactDOM from 'react-dom';

const GetEvents = ({event}) => {

    const [events, setEvents] = React.useState([]);
    const [selected, setSelected] = React.useState();
    const [load, setLoad] = React.useState(true);
    const [error, setError] = React.useState(false);

    const days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

    useEffect(() => {
        const course = document.getElementById('root').getAttribute('course')
        fetch("https://vcadeal.nl/api/events/" + course)
        .then(res => {
            if(res.ok){
                return res.json()
            }
            setError(true);

        })
        .then(res => {
            setEvents(res);
            setLoad(false);
            return res
        })
        .then(res => {
            document.getElementById('first-upcoming').innerHTML = days[new Date(res[0].date).getDay()] + " " + new Date(res[0].date).getDate() + " " + months[new Date(res[0].date).getMonth()]
        })
        
    }, [])

    const selectEvent = (id) => {
        setSelected(id)
        event(id)
        // document.getElementById('eventID').innerHTML = event.target.value;
    }
    if(error){
        return <div>Er is iets misgegaan bij het ophalen van de cursusmomenten. Laad de pagina opnieuw of neem telefonisch contact op.</div>
    }

    if(load){
        return <div>loading...</div>
    } else{
        return(
            <div>
                <h3 className="title is-three">Stap 1 - Selecteer datum</h3>
                <p>Selecteer cursusmoment</p>
                <ul className="select-event list-group">
                {events.map(event => {
                    return(
                        <li className="list-group-item" value={event.id} onClick={() => selectEvent(event.id)}>

                                {event.location} - {("0" + new Date(event.date).getDate()).slice(-2)  }-{("0" + (new Date(event.date).getMonth() + 1)).slice(-2)   }-{new Date(event.date).getFullYear()}  {event.id == selected && <span><i className="fas fa-check-circle fa-lg"></i> Geselecteerd</span>}

                        </li>
                    )      
                })}
                </ul>
            </div>
        )
    }
}

export default GetEvents;

// ReactDOM.render(<GetEvents />, document.getElementById('events'));