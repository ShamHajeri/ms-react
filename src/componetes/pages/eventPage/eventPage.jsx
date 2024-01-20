import './eventPage.css';
import NavBar from '../../navBar/navBar';
import Footer from '../../footer/footer';
import Data from '../../../assert/data/Data.ts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview } from '../../redux/reviewSlice.js';
import ETB from '../../planet/planet.jsx';

const EventPage = () => {
    const data = Data.EventPage
    const [eventNumber, setEventNumber] = useState(2);
    const dispatch = useDispatch();

    const TLHTML = data.Event.map((item, index) => <div class="TLName"
        onClick={() => {
            setEventNumber(index)
        }}><span style={{
            opacity:`${eventNumber===index?"100%":"40%"}`
        }}>{item.name}</span></div>);
    return (<>
        <div class="ETB_event" style={{
            right: `${data.Event[eventNumber].EIPosition}`
            , width: `${data.Event[eventNumber].EISize}`
            , height: `${data.Event[eventNumber].EISize}`
        }}>
            <ETB etb="moon" />
        </div>
        <div class="eventDiv" style={{
            left: `${data.Event[eventNumber].EIPosition}`
        }}>
            <div class='descriptionBox' >
                <span>{data.Event[eventNumber].content}</span><br />
                <button onClick={() => {
                    dispatch(updateReview(data.Event[eventNumber]));
                    window.location.href = '/Review';
                }} class='mainBtn'> Expoler </button>
            </div>
        </div>
        <div class="timeLine"
        style={{top:`calc(${4.5-eventNumber}*10%)`}}
        > {TLHTML}</div>
    </>)
}
export default EventPage;