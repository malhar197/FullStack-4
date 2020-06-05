import React , {useState, useEffect} from 'react';
import axios from 'axios';

export default function EventList() {
    const [events,setEvents] = useState([]);
  
    useEffect(()=>{
        axios.get('http://localhost:3030/logs/events')
        .then(res =>{
            console.log(res.data);
            const events = res.data;
            setEvents(events);
        });
    },[]);

    return (
        <>
        <table>
        <th>Event type</th>
        <th>Sender</th>
        <th>Date and Time</th>
            {events.map(event => (
                <tr>
                <td>{event.event}</td>
                <td>{event.sender}</td>
                <td>{event.createdAt}</td>
                </tr>
            ))}
        </table>
    </>
    );
}