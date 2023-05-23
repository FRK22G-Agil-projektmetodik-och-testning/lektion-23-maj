import { useNavigate } from "react-router-dom";
import './Event.scss';

function Event(props) {
    const { event } = props;
    const navigate = useNavigate();

    return (
      <article className="event" data-id="event"
       onClick={ () => { navigate('/buy', { state: { event } }) }}>
        <aside className="date" data-id="eventDate">{ event.when.date }</aside>
        <section className="info">
          <h2 data-id="eventTitle">{ event.name }</h2>
          <p className="where" data-id="eventPlace">{ event.where }</p>
          <footer>
            <p className="time" data-id="eventTime">{ event.when.from } - { event.when.to }</p>
            <p className="price" data-id="eventPrice">{ event.price } kr</p>
          </footer>
        </section>
      </article>
    )
  }
  
export default Event;