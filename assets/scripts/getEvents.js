import React, { useEffect } from "react"
import ReactDOM from 'react-dom';

const GetEvents = ({event}) => {

    const [events, setEvents] = React.useState([]);
    const [selected, setSelected] = React.useState();
    const [load, setLoad] = React.useState(true);

    useEffect(() => {
        const course = document.getElementById('root').getAttribute('course')
        fetch("https://vcadeal.nl/api/events/" + course)
        .then(res => res.json())
        .then(res => {
            setEvents(res);
            setLoad(false);
        })

        
    }, [])

    const selectEvent = (id) => {
        setSelected(id)
        event(id)
        // document.getElementById('eventID').innerHTML = event.target.value;
    }

    if(load){
        return <div>loading...</div>
    } else{
        return(
            <div>
                <h3 className="title is-three">Stap 1 - Selecteer datum</h3>
                <p>Selecteer cursusmoment</p>
                <ul>
                {events.map(event => {
                    return(
                        <li>
                            <div className="card" value={event.id} onClick={() => selectEvent(event.id)}>
                            <header className="card-header">
                                <p className="card-header-title">
                                {event.location} - {("0" + new Date(event.date).getDate()).slice(-2)  }-{("0" + (new Date(event.date).getMonth() + 1)).slice(-2)   }-{new Date(event.date).getFullYear()}  {event.id == selected && <i className="fas fa-check-circle fa-lg"></i>}
                                </p>
                            </header>
                            </div>
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