import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import './Confirmation.scss';

function Confirmation() {
    const { state } = useLocation();


    return (
      <main className="confirmation">
        <h1 data-id="confirmation">Tack för din beställning</h1>
        <article className="ticket">
          <section class="what">
              <p class="type">what</p>
              <h1 data-id="eventTitle">{state.event.name }</h1>
          </section>
          <section class="where">
              <p class="type">Where</p>
              <h2 data-id="eventPlace">{ state.event.where }</h2>
          </section>
          <section class="when">
              <p class="type">When</p>
              <h2 data-id="eventDate">{ state.event.when.date }</h2>
          </section>
          <section class="from">
              <p class="type">From</p>
              <h2 data-id="eventTimeFrom">{ state.event.when.from }</h2>
          </section>
          <section class="to">
              <p class="type">To</p>
              <h2 data-id="eventTimeTo">{ state.event.when.to }</h2>
          </section>
          <section class="code">
              <h1 class="barcode">
                  { nanoid() }
              </h1>
              <p class="utfcode">#{ nanoid() }</p>
          </section>
        </article>
      </main>
    )
  }
  
export default Confirmation;