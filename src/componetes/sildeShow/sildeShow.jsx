import './sildeShow.css'
import Sildes from '../sildes/slides';
import { useState } from 'react';


const SildeShow = (props) => {
    const sildesData = props.sildes.sildes
   let [current, setCurrent] = useState(2);
    const arrowPervious = () => {
        if (current > 0)
            setCurrent(current--);
    }
    const arrowNext = () => {
        if (current < 4)
            setCurrent(current++);
    }

    return (
        <div class='mainSildes'>
            <div class='sildeShow'>
                <span class='arrowBtn' onClick={arrowPervious}>&lt;</span>
                <Sildes text={sildesData[current].text} image={sildesData[current].url} />
                <span class='arrowBtn' onClick={arrowNext}>&gt;</span>
            </div>
        </div>
    )
}
export default SildeShow