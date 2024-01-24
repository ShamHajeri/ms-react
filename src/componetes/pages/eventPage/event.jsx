import './eventPage.css';
import NavBar from '../../navBar/navBar';
import Footer from '../../footer/footer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview } from '../../redux/reviewSlice.js';
import ETB from '../../planet/planet.jsx';

const Event = ({eveData}) => {

    const [eventNumber, setEventNumber] = useState(2);
    const dispatch = useDispatch();
  
    const TLHTML = eveData.map((item, index) => <div class="TLName"
        onClick={() => {
            setEventNumber(index)
        }}><span style={{
            opacity: `${eventNumber === index ? "100%" : "40%"}`
        }}>{item.name}</span></div>);
    return (<>
        <div class="ETB_event" style={{
            right: `${eveData[eventNumber].EIPosition}`
            , width: `${eveData[eventNumber].EISize}`
            , height: `${eveData[eventNumber].EISize}`
        }}>
            <ETB etb="mars" />
        </div>
        <div class="eventDiv" style={{
            left: `${eveData[eventNumber].EIPosition}`
        }}>
            <div class='descriptionBox' >
                <span>{eveData[eventNumber].content}</span><br />
                <button onClick={() => {
                    dispatch(updateReview(eveData[eventNumber]));
                    window.location.href = '/Review';
                }} class='mainBtn'> Expoler </button>
            </div>
        </div>
        <div class="timeLine">
            <div class="timeLine-element"
                style={{ top: `calc(${5 - eventNumber}*10%)` }}>
                {TLHTML}
            </div>
        </div>
    </>)
}
export default Event;