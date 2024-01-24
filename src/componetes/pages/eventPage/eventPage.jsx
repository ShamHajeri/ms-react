import './eventPage.css';
import NavBar from '../../navBar/navBar';
import Footer from '../../footer/footer';
import { useState } from 'react';
import Event from './event.jsx';
import { EventData, Planets } from '../../../assert/data/EventPageData.ts'

const EventPage = () => {
    const [eventNumber, setEventNumber] = useState(2);

    const TLP = Planets.map((item, index) => 
        <div class="TLName"
            onClick={() => {
                setEventNumber(index)
            }}> {eventNumber === index ? <p>&#8592;</p> : ""}
            <span style={{
                opacity: `${eventNumber === index ? "100%" : "40%"}`
            }}>
                {item}
            </span></div>
    );


    return (
        <>
            <NavBar />
            <Event eveData={EventData[eventNumber].data} />
            <div class="timeLine-planet">
                <div class="timeLine-element"
                    style={{ top: `calc(${5 - eventNumber}*10%)` }}>
                    {TLP}
                </div>
            </div>
            {/* <Footer/> */}
        </>)
}
export default EventPage;