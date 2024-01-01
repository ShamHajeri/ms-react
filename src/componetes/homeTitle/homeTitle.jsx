import { useEffect, useState } from 'react';
import './homeTitle.css';

const HomeTitle = (props) => {

    const data = props.HomeTitleData;
    const [bIPosition, setBIPosition] = useState(data.defualtBIPosition);
    const [bISize, setBISize] = useState(data.defualtBISize)
    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > 150) {
            setBIPosition(data.nextBIPosition)
            setBISize(data.nextBISize)
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            listenToScroll();
          };
        window.addEventListener("scroll", handleScroll);
        return () =>
        
            window.removeEventListener("scroll", handleScroll);
    }, [listenToScroll])


    return (
        <>
            <div class="homeTitle" style={{ backgroundPosition: `${bIPosition}`, backgroundSize: `${bISize}` }}>
                <span class='mainTitle'>
                    <label class='mainHeading'>{data.mainHeading}</label><br />
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