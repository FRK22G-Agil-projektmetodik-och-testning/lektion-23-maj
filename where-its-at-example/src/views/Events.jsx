import { useEffect, useState } from "react";
import Event from "../components/Event";
import './Events.scss';

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      async function getEvents() {
        const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/where-its-at-api/events');
        const data = await response.json();

        setEvents(data);
      }

      getEvents();
    }, [])

    const eventComponents = events.map((event, index) => {
      return <Event event={ event } key={ index } />
    });

    return (
      <main className="events">
        <header>
          <h1>Events</h1>
        </header>
        <section className="content">
          { eventComponents }
        </section>
      </main>
    )
  }
export default Events;