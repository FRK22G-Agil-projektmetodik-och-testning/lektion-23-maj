import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Events() {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      async function getEvents() {
        const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/where-its-at-api/events');
        const data = await response.json();

        setEvents(data);
      }

      getEvents();
    }, [])

    const eventComponents = events.map((event) => {
      return (
        <article data-id="event" onClick={ () => { navigate('/buy') }}>
          <aside data-id="eventDate">{ event.when.date }</aside>
          <h2 data-id="eventTitle">{ event.name }</h2>
          <h3 data-id="eventPlace">{ event.where }</h3>
          <p data-id="eventTime">{ event.when.from } - { event.when.to }</p>
          <p data-id="eventPrice">{ event.price } kr</p>
        </article>
      )
    });

    return (
      <section>
        { eventComponents }
      </section>
    )
  }
export default Events;