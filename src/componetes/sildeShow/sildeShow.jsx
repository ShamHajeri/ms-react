import './sildeShow.css'
import Sildes from '../sildes/slides';
import { useState } from 'react';


const SildeShow = (props) => {
    const sildesData = props.sildes.sildes
    let [current, setCurrent] = useState(0);
    const Dashs = sildesData.map((item, index) => <div class='dashClass' style={{ backgroundColor: `${current === index ? "white" : "rgb(60, 60, 60)"}` }} />)

    return (
        <div class='mainSildes'>
            <div class='sildeShow'>
                <div class='arrowBtn' onClick={(current) => { current === -1 ? setCurrent(sildesData.length - 1) : setCurrent(current--) }}>&lt;</div>
                <Sildes text={sildesData[current].text} image={sildesData[current].url} />
                <div class='arrowBtn' onClick={() => { current === sildesData.length ? setCurrent(0) : setCurrent(current++) }}>&gt;</div>
            </div>
            <div class='dash'>
                {Dashs}

            </div>
        </div>
    )
}
export default SildeShow