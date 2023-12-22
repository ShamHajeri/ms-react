import { useEffect, useState } from 'react';
import './homeTitle.css'



const HomeTitle = (props) => {

    const data = props.HomeTitleData;
    const [bIPosition, setBIPosition] = useState(data.defualtBIPosition);
    const [bISize, setBISize] = useState(data.defualtBISize)

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])
    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > 100) {
            setBIPosition(data.nextBIPosition)
            setBISize(data.nextBISize)
        }
    };


    return (
        <>
            <div class="homeTitle" style={{ backgroundPosition: `${bIPosition}`, backgroundSize: `${bISize}` }}>
                <span class='mainTitle'>
                    <label class='mainHeading'>{data.mainHeading}</label> <br />
                    <label class='subHeading'>{data.subHeading}</label><br /><br />
                    <button class='mainBtn'>
                        {data.mainBtn}
                    </button>
                </span>
            </div>
        </>
    )
}

export default HomeTitle;