import React, { useEffect } from "react"
import {Helmet} from "react-helmet";
import { nanoid } from 'nanoid'

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
                        <>
                        <li className="list-group-item" value={event.id} onClick={() => selectEvent(event.id)}>
                            {event.location} - {days[new Date(event.date).getDay()] + " " + new Date(event.date).getDate() + " " + months[new Date(event.date).getMonth()]}  {event.id == selected && <span><i className="fas fa-check-circle fa-lg"></i> Geselecteerd</span>}
                        </li>
                        <Helmet>
                        <script key={nanoid()} type="application/ld+json">{`
                            {
                                "@context": "http://schema.org"
                            }
                        `}</script>
                        </Helmet>
                        </>
                    )      
                })}
                </ul>
                {events.map(event => {
                    return <Helmet>
                    <script key={nanoid()} type="application/ld+json">
                        {`
                        "@context": "https://schema.org",
                        "@type": "EducationEvent",
                        "name": ${event.course},
                        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                          "eventStatus": "https://schema.org/EventScheduled",
                        "location": {
                            "@type": "Place",
                            "name": "Orbi Opleidingen",
                            "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Sydneystraat 118",
                            "addressLocality": "Rotterdam",
                            "postalCode": "3047 BP",
                            "addressCountry": "NL"
                            }
                        },
                        "image": [
                            "https://vcadeal.nl/media/logo.png"
                        ],
                        "description":
{{event.course.description|json_encode()|raw}},
                        "offers": {
                            "@type": "Offer",
                            "url": "https://vcadeal.nl/",
                            "price": "{{event.price}}",
                            "priceCurrency": "EUR",
                            "availability": "https://schema.org/InStock",
                            "validFrom": "2024-05-21T12:00"
                        },
                        "performer": {
                            "@type": "PerformingGroup",
                            "name": "Orbi Opleidingen"
                        },
                        "organizer": {
                            "@type": "Organization",
                            "name": "VCA 365",
                            "url": "https://vcadeal.nl"
                            }
                        }
                        `}
                    </script>
                </Helmet>
                })}
            </div>
        )
    }
}

export default GetEvents;