import './eventPage.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview } from '../../redux/reviewSlice.js';
import ETB from '../../planet/planet.jsx';

const EventMobile = ({ eve }) => {
    const eveData = eve.data;
    const [eventNumber, setEventNumber] = useState(2);
    const dispatch = useDispatch();

    console.log(eveData);

    const TLHTML = eveData.map((item, index) => (
        <div className="TLName" onClick={() => setEventNumber(index)}>
            <span style={{ opacity: `${eventNumber === index ? "100%" : "40%"}` }}>
                {item.name}
            </span>
        </div>
    ));

    return (
        <>
            <div className="ETB_event_Mobile" style={{
                left: `${eventNumber * 15 - 50}px`,
                width: `${eventNumber ? eventNumber * 170 : 120}px`
                , height: `${eventNumber ? eventNumber * 170 : 120}px`
            }}>
                <ETB etb={eve.name} />
            </div>
            <div className="mobile_event">
                <div className="eventDivMobile" >
                    <div className='descriptionBoxMobile'>
                        <span>{eveData[eventNumber].content}</span><br />
                        <button onClick={() => {
                            dispatch(updateReview(eveData[eventNumber]));
                            window.location.href = '/Review';
                        }} className='mainBtn'> Explore </button>
                    </div>
                </div>
                <div className="timeLineMobile">
                    <div className="timeLine-elementMobile"
                    >
                        {TLHTML}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventMobile;
