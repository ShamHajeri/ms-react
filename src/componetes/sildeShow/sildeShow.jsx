import './sildeShow.css';
import Sildes from '../sildes/slides';
import { useState } from 'react';

const SildeShow = (props) => {
    const sildesData = props.sildes.sildes;
    let [current, setCurrent] = useState(2);

    const Dashs = sildesData.map((item, index) => (
        <div className='dashClass' style={{ backgroundColor: `${current === index ? "white" : "rgb(60, 60, 60)"}` }} />
    ));


    return (
        <div className='mainSildes'>
            <div className='sildeShow'>
                <div className='arrowBtn' onClick={() => { setCurrent((prev) => (prev === 0 ? sildesData.length - 1 : prev - 1)); }}>&lt;</div>
                <Sildes sildeData={sildesData[current]} />
                <div className='arrowBtn' onClick={() => { setCurrent((prev) => (prev === sildesData.length - 1 ? 0 : prev + 1)); }}>&gt;</div>
            </div>
            <div className='dash'>{Dashs}</div>
        </div>
    );
};

export default SildeShow;
