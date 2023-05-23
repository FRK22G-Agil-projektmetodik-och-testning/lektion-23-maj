import { useLocation, useNavigate } from "react-router-dom";
import './Buy.scss';

function Buy() {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
      <main className="buy">
        <section className="content">
            <p data-id="buy">You are about to score some tickets to</p>
            <h1 data-id="eventTitle">{ state.event.name }</h1>
            <p className="when" data-id="eventDate">{ state.event.when.date } { state.event.when.from } - { state.event.when.to }</p>
            
            <p className="where" data-id="eventPlace">{ state.event.where }</p>
            <p className="price" data-id="eventPrice">{ state.event.price } kr</p>
            <button className="btn" data-id="buy-button" onClick={ () => { navigate('/confirmation', { state: { event: state.event } }) }}>Take my money</button>
        </section>
      </main>
    )
}
  
export default Buy;