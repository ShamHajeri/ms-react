import './eventPage.css';
import NavBar from '../../navBar/navBar';
import Footer from '../../footer/footer';
import { useState, useEffect } from 'react';
import Event from './event.jsx';
import EventMobile from './eventMobile.jsx';
import { EventData, Planets } from '../../../assert/data/EventPageData.ts'

const EventPage = () => {
    const [eventNumber, setEventNumber] = useState(2);
    const [screenWidth, setScreenWidth] = useState('1000');
    useEffect(() => {
        const updateWindowWidth = () => {
            setScreenWidth(window.innerWidth);
            console.log(window.innerWidth)
        };
        window.addEventListener('resize', updateWindowWidth);
        updateWindowWidth();
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, [screenWidth]);

    const TLP = Planets.map((item, index) =>
        <div class="TLName"
            onClick={() => {
                setEventNumber(index)
            }}> {eventNumber === index ? <p>&#11013;</p> : ""}
            <span style={{
                opacity: `${eventNumber === index ? "100%" : "40%"}`
            }}>
                {item}
            </span></div>
    );

    const TLPMobile = Planets.map((item, index) =>
        <div class="TLNameMobile"
            onClick={() => {
                setEventNumber(index)
            }}> {eventNumber === index ? <p>&#11835;</p> : ""}
            <span style={{
                opacity: `${eventNumber === index ? "100%" : "40%"}`
            }}>
                {item}
            </span></div>
    );



    const MobileView = () => {
        return (
            <>
                <NavBar />
                <EventMobile eve={EventData[eventNumber]} />
                <div class="timeLine-planet-mobile">
                    <div class="timeLine-element-mobile">
                        {TLPMobile}
                    </div>
                </div>
                <div class="backgroundEffect">

                </div>
            </>
        )

    }



    const DesktopView = () => {
        return (
            <>
                <NavBar />
                <Event eve={EventData[eventNumber]} />
                <div class="timeLine-planet">
                    <div class="timeLine-element"
                        style={{ top: `calc(${5 - eventNumber}*10%)` }}>
                        {TLP}
                    </div>
                </div>

            </>
        )

    }
    return (<div>
        {screenWidth < 600 ? MobileView() : DesktopView()}
    </div>
    )
}
export default EventPage;