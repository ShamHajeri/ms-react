import './eventPage.css';
import NavBar from '../../navBar/navBar';
import Footer from '../../footer/footer';
import Data from '../../../assert/data/Data.ts';
import { useEffect, useState } from 'react';

const EventPage = () => {
    const data = Data.EventPage
    const [eventNumber, setEventNumber] = useState(0);

    const TLHTML = data.Event.map((item, index) => <div class="TLName"
        style={{
            opacity: `${eventNumber === index ? "100%" : "40%"}`,
            textAlign: `${eventNumber === index ? "left" : "right"}
    `}}
        onClick={() => {
            setEventNumber(index)
        }}><span>{item.Name}</span></div>);


    return (
        <>
            <NavBar></NavBar>
            <div class='event' style={{ backgroundPosition: `${data.Event[eventNumber].EIPosition}`, backgroundSize:`${data.Event[eventNumber].EISize}` }}>
                <div class="eventDiv" >
                    <div class='descriptionBox' >
                        {data.Event[eventNumber].description}
                    </div>
                </div>
                <div class="timeLine">
                    {TLHTML}
                </div>
            </div>
            <Footer></Footer>
        </>)
}
export default EventPage;